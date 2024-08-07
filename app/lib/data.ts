import { sql } from '@vercel/postgres';
import { Link, Experience, Project } from './definitions';


export async function fetchLinks(): Promise<{ data: Link[] | null, error: string | null }> {
    try {

        const data = await sql<Link>`SELECT * FROM links`;

        return { data: data.rows, error: null };
    } catch (error) {
        console.error('Database Error:', error);
        return { data: null, error: 'Failed to fetch links data.' };
    }
}




export async function fetchExperience(): Promise<{ data: Experience[] | null, error: string | null }> {
    try {

        const data = await sql<Experience>`SELECT * FROM experience`;


        return { data: data.rows, error: null };
    } catch (error) {
        console.error('Database Error:', error);
        return { data: null, error: 'Failed to fetch experience data.' };
    }
}


export async function fetchProjects(): Promise<{ data: Project[] | null, error: string | null }> {
    try {
    
        const data = await sql<Project>`SELECT * FROM projects`;

        return { data: data.rows, error: null };
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch project data.');
    }
}

