import bcrypt from 'bcrypt';
import { db } from '@vercel/postgres';
import { links, experience, projects } from '../lib/placeholder-data';

const client = await db.connect();

async function seedLinks() {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    await client.sql`
        CREATE TABLE links (
            id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
            name TEXT NOT NULL,
            url TEXT NOT NULL
        )
    `;

    const insertedLinks = await Promise.all(
        links.map((link) => {
            return client.sql`
                INSERT INTO links (name, link)
                VALUES (${link.name}, ${link.link})
                RETURNING *
            `;
        })
    );
    

    return insertedLinks;

}

async function seedExperience() {
    await client.sql`
        CREATE TABLE experience (
            id SERIAL PRIMARY KEY,
            title TEXT NOT NULL,
            date TEXT NOT NULL,
            description TEXT NOT NULL
        )
    `;

    const insertedExperience = await Promise.all(
        experience.map((exp) => {
            return client.sql`
                INSERT INTO experience (title, description,date)
                VALUES (${exp.title}, ${exp.description}, ${exp.date})
                RETURNING *
            `;
        })
    );

    return insertedExperience;
}

async function seedProjects() {
    await client.sql`
        CREATE TABLE projects (
            id SERIAL PRIMARY KEY,
            title TEXT NOT NULL,
            description TEXT NOT NULL,
            github TEXT NOT NULL,
            deploy TEXT NOT NULL,
            img_url TEXT NOT NULL
        )
    `;

    const insertedProjects = await Promise.all(
        projects.map((project) => {
            return client.sql`
                INSERT INTO projects (title, description, github, deploy, img_url)
                VALUES (${project.title}, ${project.description}, ${project.github}, ${project.deploy}, ${project.img_url})
                RETURNING *
            `;
        })
    );

    return insertedProjects;
}


export async function GET(){
    try{
        await client.sql`BEGIN`;
        await seedLinks();
        await seedExperience();
        await seedProjects();
        await client.sql`COMMIT`;
        return { status: 200, body: { message: 'Seed successful' } };
    } 
    catch (error) {
        await client.sql`ROLLBACK`;
        return { status: 500, body: { message: 'Seed failed' } };
    }
    finally {
        client.release();
    }
}