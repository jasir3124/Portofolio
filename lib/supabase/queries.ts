import { createClient } from "./server";

// Example: fetch all projects in a Server Component
export async function getProjects() {
    const supabase = await createClient();

    const { data, error } = await supabase
        .from("projects")
        .select("*")
        .order("created_at", { ascending: false });

    console.log("data");
    console.log(data);


    if (error) throw new Error(error.message);

    return data;
}

// Example: fetch a single project by title
export async function getProjectByTitle(title: string) {
    const supabase = await createClient();

    const { data, error } = await supabase
        .from("projects")
        .select("*")
        .eq("title", title)
        .single();

    if (error) throw new Error(error.message);

    return data;
}

// Example: fetch projects filtered by stack
export async function getProjectsByStack(tech: string) {
    const supabase = await createClient();

    const { data, error } = await supabase
        .from("projects")
        .select("*")
        .contains("stack", [tech]); // uses Postgres @> operator on text[]

    if (error) throw new Error(error.message);

    return data;
}