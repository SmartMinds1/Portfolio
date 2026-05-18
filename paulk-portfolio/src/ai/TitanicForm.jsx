import { useState } from "react";

export default function TitanicForm() {
  const [form, setForm] = useState({
    Sex: "male",
    Age: "",
    Pclass: 1,
    Fare: "",
    Embarked: "S",
  });

  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  //handling user inputs
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };


// Submiting input to backend and handling errors
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    setLoading(true);
    setError(null);
    setResult(null);
  
    try {
      // const res = await fetch("http://127.0.0.1:8000/predict", {               //local
      const res = await fetch("https://biznutritia-ai.onrender.com/predict", {    //live
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });
  
      // 1. Handle HTTP errors (backend down / server error)
      if (!res.ok) {
        throw new Error(`Server error: ${res.status}`);
      }
  
      let data;
      try {
        data = await res.json();
      } catch (err) {
        // 2. Invalid JSON response
        throw new Error("Invalid response from server");
      }
  
      // 3. Validate expected structure
      if (typeof data.survived !== "number") {
        throw new Error("Unexpected response format");
      }
  
      setResult(data.survived);
  
    } catch (err) {
      // 4. Network error / backend down / any failure
      setError(err.message);
  
    } finally {
      setLoading(false);
    }
  };




  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8">
        
        {/* Header */}
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-slate-800">
            Titanic Predictor 🚢
          </h2>
          <p className="text-slate-500 mt-2">
            Predict survival chances on the Titanic
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">

          {/* Sex */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Gender
            </label>

            <select
              name="Sex"
              value={form.Sex}
              onChange={handleChange}
              className="w-full border border-slate-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>

          {/* Age */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Age
            </label>

            <input
              type="number"
              name="Age"
              placeholder="Enter age"
              value={form.Age}
              onChange={handleChange}
              className="w-full border border-slate-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Passenger Class */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Passenger Class
            </label>

            <select
              name="Pclass"
              value={form.Pclass}
              onChange={handleChange}
              className="w-full border border-slate-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="1">1st Class</option>
              <option value="2">2nd Class</option>
              <option value="3">3rd Class</option>
            </select>
          </div>

          {/* Fare */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Fare
            </label>

            <input
              type="number"
              name="Fare"
              placeholder="Enter fare"
              value={form.Fare}
              onChange={handleChange}
              className="w-full border border-slate-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Embarked */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Embarked
            </label>

            <select
              name="Embarked"
              value={form.Embarked}
              onChange={handleChange}
              className="w-full border border-slate-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="S">Southampton (S)</option>
              <option value="C">Cherbourg (C)</option>
              <option value="Q">Queenstown (Q)</option>
            </select>
          </div>

          {/* Button */}
          <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-50 py-4"
            >
              {loading ? "Predicting..." : "Predict Survival"}
          </button>
        </form>

        {/* Result */}
          {result !== null && (
              <div className={`mt-6 text-center py-4 rounded-xl font-semibold text-lg ${
                result === 1
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
              }`}>
                {result === 1 ? "Survived ✅" : "Did not survive ❌"}
              </div>
            )}

        {/* Error capture block */}
          {error && (
              <div className="mt-4 text-center text-red-600 bg-red-100 py-3 rounded-xl">
                {error}
              </div>
            )}

      </div>
    </div>
  );
}