namespace TodoList {
	type GetTodosRequest = void;
	type GetTodosResponse = {
		_id: string;
		photo: string;
		title: string;
		date: string;
	}[];

	type PostTodosRequest = {
		photo: string;
		title: string;
		date: string;
	};
  type PostTodosResponse = {
    _id: string;
    photo: string;
    title: string;
    date: string;
  }[];
}
