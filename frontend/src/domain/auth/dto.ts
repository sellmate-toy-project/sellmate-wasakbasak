export interface LoginRequest {
	email: string;
	uid: string;
}

export interface LoginResponse {
	access_token: string;
	token_type: string;
	user: string;
}
// access_token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZXhwIjoxNjY4MDA0MTEyfQ.S2f0u0eKlqGYZgyD_nCaJUDZKwntkfl0a1cu2WrYaBs"
// email: "wasakbasak.test@gmail.com"
// floor: "3"
// name: "김우영"
// nick_name: ""
// picture: "https://lh3.googleusercontent.com/a/ALm5wu2HJlm5bevtD627PRWbZdgGvIGj20VnYQJgeAQi=s96-c"
// type: "basic"
// uid: "101319241875377937515"

export interface JoinRequest {
	access_token: string;
	email: string;
	floor: string;
	name: string;
	nick_name: string;
	picture: string;
	type: string;
	uid: string;
}
export interface JoinResponse {
	email: string;
	floor: string;
	id: string;
	nick_name: string;
	picture: string;
	type: string;
}
