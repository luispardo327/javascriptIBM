// variables para el ejemplo uno 

let userRole = "admin";
let accessLevel;

//variables para el ejemplo dos
let isLoggedIn = true;
let userMessage;

// condicional para ejemplo uno
if (userRole === "admin"){
    accessLevel = "full access granted";
}else if (userRole === "manager"){
    accessLevel = "Limited access granted";
} else {
    accessLevel = "No access granted";
}

document.write ("access Level "+ accessLevel);
console.log("access Level "+ accessLevel);

// condicional para el ejemplo dos

if (isLoggedIn){
    if (userRole === "admin"){
        userMessage = "Welcome, Admin!";
    } else {
        userMessage ="Welcome, User!";
    }
} else {
    userMessage = "Please log in to access the system";
}

document.write("user message:", userMessage);
console.log("user message:", userMessage);


// ejemplo tres con switch
let UserType = "subscriber";
let userCategory;

switch (UserType){
    case "admin":
        userCategory = "Administrator";
        break;
    case "manager":
        userCategory = "Manager";
        break
    case "subscriber":
        userCategory = "subscriber";
        break
    default:
        userCategory = "unknown"    
}

console.log("user category:", userCategory)

// ejemplo cuatro 

let isAuthenticated = true;
let authenticationStatus = isAuthenticated ? "Authenticated" : "Not authenticated";

console.log("Authentication Status:", authenticationStatus);