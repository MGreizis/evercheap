import { useState, useEffect } from "react";
import { useUser, useSupabaseClient, Session } from "@supabase/auth-helpers-react";
import { Database } from "../../utils/database.types";
type Profiles = Database["public"]["Tables"]["profiles"]["Row"];
import Styles from "../../styles/Account.module.css";

export default function Account({ session }: { session: Session }) {
  const supabase = useSupabaseClient<Database>();
  const user = useUser();
  const [loading, setLoading] = useState(true);
  const [username, setUsername] = useState<Profiles["username"]>(null);
  const [firstName, setFirstName] = useState<Profiles["firstName"]>(null);
  const [lastName, setLastName] = useState<Profiles["lastName"]>(null);

  useEffect(() => {
    getProfile();
  }, [session]);

  async function getProfile() {
    try {
      setLoading(true);
      if (!user) throw new Error("No user");

      let { data, error, status } = await supabase
        .from("profiles")
        .select(`username, firstName, lastName`)
        .eq("id", user.id)
        .single();

      if (error && status !== 406) {
        throw error;
      }

      if (data) {
        setUsername(data.username);
        setFirstName(data.firstName);
        setLastName(data.lastName);
      }
    } catch (error) {
      alert("Error loading user data!");
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  async function updateProfile({
    username,
    firstName,
    lastName,
  }: {
    username: Profiles["username"];
    firstName: Profiles["firstName"];
    lastName: Profiles["lastName"];
  }) {
    try {
      setLoading(true);
      if (!user) throw new Error("No user");

      const updates = {
        id: user.id,
        username,
        firstName,
        lastName,
        updated_at: new Date().toISOString(),
      };

      let { error } = await supabase.from("profiles").upsert(updates);
      if (error) throw error;
      alert("Profile updated!");
    } catch (error) {
      alert("Error updating the data!");
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className={Styles.main}>
      <div className="form-widget">
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-secondary"
        >
          Your Email
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-gray-500"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
            </svg>
          </div>
          <input
            type="text"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-none rounded-r-lg rounded-l-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5"
            value={session.user.email}
            disabled
          />
        </div>

        <label
          htmlFor="username"
          className="block mb-2 text-sm font-medium text-secondary pt-4"
        >
          Username
        </label>
        <div className="flex">
          <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md">
            @
          </span>
          <input
            type="text"
            id="username"
            className="rounded-none rounded-r-lg w-full bg-white rounded border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            value={username || ""}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <label
          htmlFor="firstName"
          className="block mb-2 text-sm font-medium text-secondary pt-4"
        >
          First Name
        </label>
        <div className="flex">
          <input
            type="firstName"
            id="firstName"
            className="rounded-none rounded-r-lg rounded-l-lg w-full bg-white rounded border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            value={firstName || ""}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>

        <label
          htmlFor="lastName"
          className="block mb-2 text-sm font-medium text-secondary pt-4"
        >
          Last Name
        </label>
        <div className="flex">
          <input
            type="lastName"
            id="lastName"
            className="rounded-none rounded-r-lg rounded-l-lg w-full bg-white rounded border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            value={lastName || ""}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>

        <div className="pt-4">
          <button
            className="inline-block rounded-lg px-3 py-1.5 text-sm font-semibold bg-secondary leading-6 text-primary shadow-sm ring-1 ring-secondary hover:ring-secondary hover:bg-tertiary"
            onClick={() => updateProfile({ username, firstName, lastName })}
            disabled={loading}
          >
            {loading ? "Loading ..." : "Update"}
          </button>
        </div>

        <div className="pt-4">
          <button
            className="inline-block rounded-lg px-3 py-1.5 text-sm font-semibold bg-secondary leading-6 text-primary shadow-sm ring-1 ring-secondary hover:ring-secondary hover:bg-tertiary"
            onClick={() => supabase.auth.signOut()}
          >
            Sign Out
          </button>
        </div>
      </div>
    </main>
  );
}
