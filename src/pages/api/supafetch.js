import supabase from "../../../utils/supabaseClient";

// Fetch all products from supabase products table and return each item as a styled card
// Make the function callable in other files
export default async function Products(req, res) {
    const { data, error } = await supabase.from("products").select("*");
    res.status(200).json(data);
}
