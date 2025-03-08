"use client";

import { useState, useEffect } from "react";
import Select, { SingleValue } from "react-select";
import axios from "axios";
import { Option, Property, Category } from "@/app/data/models/FormOptions";

export default function FormPage() {
  const [categories, setCategories] = useState<Option[]>([]);
  const [subCategories, setSubCategories] = useState<Option[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<Option | null>(null);
  const [selectedSubCategory, setSelectedSubCategory] = useState<Option | null>(
    null
  );
  const [properties, setProperties] = useState<Property[]>([]);
  const [formData, setFormData] = useState<Record<number, string | number>>({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const { data } = await axios.get<{ data: { categories: Category[] } }>(
        `/api/proxy?path=all-categories/web`
      );

      setCategories(
        data.data.categories.map((cat) => ({ value: cat.id, label: cat.name }))
      );
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  const handleCategoryChange = async (selected: SingleValue<Option>) => {
    if (!selected) return;
    setSelectedCategory(selected);
    setSelectedSubCategory(null);
    setSubCategories([]);
    setProperties([]);

    try {
      const { data } = await axios.get<{ data: Property[] }>(
        `/api/proxy?path=properties/${selected.value}`
      );

      const extractedSubCategories = data.data.map((prop) => ({
        value: prop.id,
        label: prop.name,
      }));

      setSubCategories(extractedSubCategories);
    } catch (error) {
      console.error("Error fetching subcategories:", error);
    }
  };

  const handleSubCategoryChange = async (selected: SingleValue<Option>) => {
    if (!selected) return;
    setSelectedSubCategory(selected);
    setProperties([]);

    try {
      const { data } = await axios.get<{ data: Property[] }>(
        `/api/proxy?path=option-properties/${selected.value}`
      );

      setProperties(data.data);
    } catch (error) {
      console.error("Error fetching properties:", error);
    }
  };

  const handlePropertyChange = (
    propertyId: number,
    selectedOption: SingleValue<Option>
  ) => {
    if (!selectedOption) return;
    setFormData((prev) => ({ ...prev, [propertyId]: selectedOption.label }));
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Dynamic Form</h1>

      <label className="block mb-2">Main Category</label>
      <Select
        options={categories}
        onChange={handleCategoryChange}
        value={selectedCategory}
      />

      {subCategories.length > 0 && (
        <>
          <label className="block mt-4 mb-2">Sub Category</label>
          <Select
            options={subCategories}
            onChange={handleSubCategoryChange}
            value={selectedSubCategory}
          />
        </>
      )}

      {properties.length > 0 &&
        properties.map((prop) => (
          <div key={prop.id} className="mt-4">
            <label className="block mb-2">{prop.name}</label>
            <Select
              options={[
                ...prop.options.map((opt) => ({
                  value: opt.id,
                  label: opt.name,
                })),
                { value: "other", label: "Other" },
              ]}
              onChange={(selectedOption) =>
                handlePropertyChange(prop.id, selectedOption)
              }
            />
          </div>
        ))}

      <button
        className="mt-6 bg-blue-500 text-white px-4 py-2 rounded"
        onClick={handleSubmit}
      >
        Submit
      </button>

      {submitted && Object.keys(formData).length > 0 && (
        <div className="mt-6">
          <h2 className="text-xl font-bold mb-4">Submitted Data</h2>
          <table className="w-full border-collapse border border-gray-400">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-400 px-4 py-2">
                  Property ID
                </th>
                <th className="border border-gray-400 px-4 py-2">Value</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(formData).map(([key, value]) => (
                <tr key={key} className="text-center">
                  <td className="border border-gray-400 px-4 py-2">{key}</td>
                  <td className="border border-gray-400 px-4 py-2">{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
