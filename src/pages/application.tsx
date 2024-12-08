import { useState } from "react";
import { useRouter } from "next/router";

export default function Application() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    selectedCollege: "",
    course: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Simulate an API call or store the form data
    console.log("Form submitted:", formData);
    // Redirect or show success message
    alert("Application submitted successfully!");
    router.push("/verify-eligibility");
    // router.push("/welcome"); // Redirect to welcome or dashboard page
  };

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-8 flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full"
      >
        <h1 className="text-2xl font-bold mb-4">College Application Form</h1>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700" htmlFor="name">
            Full Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700" htmlFor="email">
            Email Address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700" htmlFor="selectedCollege">
            Select College
          </label>
          <select
            id="selectedCollege"
            name="selectedCollege"
            value={formData.selectedCollege}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">-- Select College --</option>
            <option value="College A">College A</option>
            <option value="College B">College B</option>
            <option value="College C">College C</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700" htmlFor="course">
            Select Course
          </label>
          <input
            id="course"
            name="course"
            type="text"
            value={formData.course}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
        >
          Submit Application
        </button>
      </form>
    </div>
  );
}