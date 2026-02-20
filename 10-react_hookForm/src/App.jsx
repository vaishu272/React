import React from "react";
import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema } from "./schema/formSchema";

const App = () => {
  const {
    register,
    handleSubmit,
    control,
    setValue,
    getValues,
    reset,
    formState: { errors, isDirty, isSubmitting },
  } = useForm({
    resolver: zodResolver(formSchema), // Zod added
    mode: "onChange",
    defaultValues: {
      firstName: "",
      email: "",
      gender: "",
      country: "",
      terms: false,
      subscribe: false,
      source: "",
    },
  });

  const isSubscribed = useWatch({
    control,
    name: "subscribe",
  });

  const onSubmit = async (data) => {
    console.log(data);
    await new Promise((res) => setTimeout(res, 1000));
    alert("Form Submitted!");
    reset();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-6">
      <div className="bg-white shadow-2xl rounded-3xl p-10 w-full max-w-xl">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Contact Form
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Name */}
          <div>
            <label className="block text-sm font-semibold mb-1">
              First Name
            </label>
            <input
              {...register("firstName")}
              className="w-full px-4 py-2 border rounded-xl"
            />
            {errors.firstName && (
              <p className="text-red-500 text-sm mt-1">
                {errors.firstName.message}
              </p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-semibold mb-1">Email</label>
            <input
              type="email"
              {...register("email")}
              className="w-full px-4 py-2 border rounded-xl"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Country */}
          <div>
            <label className="block text-sm font-semibold mb-1">Country</label>
            <select
              {...register("country")}
              className="w-full px-4 py-2 border rounded-xl"
            >
              <option value="">Choose...</option>
              <option value="india">India</option>
              <option value="usa">USA</option>
              <option value="uk">UK</option>
            </select>
            {errors.country && (
              <p className="text-red-500 text-sm mt-1">
                {errors.country.message}
              </p>
            )}
          </div>

          {/* Gender */}
          <div>
            <label className="block text-sm font-semibold mb-2">Gender</label>
            <div className="flex gap-6">
              <label>
                <input type="radio" value="male" {...register("gender")} /> Male
              </label>
              <label>
                <input type="radio" value="female" {...register("gender")} />{" "}
                Female
              </label>
            </div>
            {errors.gender && (
              <p className="text-red-500 text-sm mt-1">
                {errors.gender.message}
              </p>
            )}
          </div>

          {/* Terms */}
          <label className="flex items-center gap-2">
            <input type="checkbox" {...register("terms")} />
            Accept Terms
          </label>
          {errors.terms && (
            <p className="text-red-500 text-sm">{errors.terms.message}</p>
          )}

          {/* Subscribe */}
          <label className="flex items-center gap-2">
            <input type="checkbox" {...register("subscribe")} />
            Subscribe to newsletter
          </label>

          {/* Conditional */}
          {isSubscribed && (
            <div>
              <label className="block text-sm font-semibold mb-1">
                Where did you hear about us?
              </label>
              <select
                {...register("source")}
                className="w-full px-4 py-2 border rounded-xl"
              >
                <option value="">Select...</option>
                <option value="instagram">Instagram</option>
                <option value="linkedin">LinkedIn</option>
                <option value="friend">Friend</option>
                <option value="google">Google</option>
              </select>
              {errors.source && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.source.message}
                </p>
              )}
            </div>
          )}

          {/* Buttons */}
          <div className="flex gap-3 pt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-blue-600 text-white px-5 py-2 rounded-xl"
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>

            <button
              type="button"
              onClick={() => {
                setValue("firstName", "Vaishnavi");
                setValue("country", "india");
              }}
              className="bg-gray-100 px-5 py-2 rounded-xl"
            >
              Auto Fill
            </button>

            <button
              type="button"
              onClick={() => alert(JSON.stringify(getValues(), null, 2))}
              className="bg-gray-100 hover:bg-gray-200 px-5 py-2 rounded-xl transition"
            >
              Show Values
            </button>

            <button
              type="button"
              onClick={() => reset()}
              className="bg-red-500 text-white px-5 py-2 rounded-xl"
            >
              Reset
            </button>
          </div>

          {isDirty && (
            <p className="text-xs text-gray-400 text-center">Form modified</p>
          )}
        </form>
      </div>
    </div>
  );
};

export default App;
