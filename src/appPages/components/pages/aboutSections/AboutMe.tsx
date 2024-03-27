"use client";

import { useState } from "react";
import scss from "./About.Me.module.scss";
// import axios from "axios";
import Link from "next/link";
import Image from "next/image";
import {
	useDeleteTodosMutation,
	useGetTodosQuery,
	usePostTodosMutation,
} from "@/redux/api/tools";

// const url = process.env.NEXT_PUBLIC_API_URL;

const AboutMe = () => {
	const { data: todoListGet = [], isLoading } = useGetTodosQuery();
	console.log(todoListGet);
	
	const [postTodos] = usePostTodosMutation();
	const [deleteTodos] = useDeleteTodosMutation();
	const [title, setTitle] = useState("");
	const [photo, setPhoto] = useState("");
	const [date, setDate] = useState("");

	const handleTodoList = async () => {
		const newTodos = {
			photo,
			title,
			date,
		};
		await postTodos(newTodos);
	};

	return (
		<div className={scss.AboutMe}>
			<div>
				<input
					type="url"
					value={photo}
					onChange={(e) => setPhoto(e.target.value)}
					placeholder="Photo"
				/>
				<input
					type="text"
					value={title}
					onChange={(e) => setTitle(e.target.value)}
					placeholder="title"
				/>
				<input
					type="date"
					value={date}
					onChange={(e) => setDate(e.target.value)}
					placeholder="date"
				/>
				<button onClick={handleTodoList}>add</button>
			</div>
			{isLoading ? (
				<>
				<h1>isLoading...</h1>
				{/* <h1>hello</h1>
				 */}
				 {/* <h1>Hello project!</h1> */}
				  <p>Project</p>
				</>
			) : (
				todoListGet.map((item, index) => (
					<Link key={index} href={`/about/${item._id}`}>
						<div>
							<Image src={item.photo} alt={item.title} />
							<h2>{item.title}</h2>
							<p>{item.date}</p>
							<button onClick={() => deleteTodos(item._id)}>delete</button>
						</div>
					</Link>
				))
			)}
		</div>
	);
};

export default AboutMe;
