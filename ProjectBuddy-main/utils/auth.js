// utils/auth.js
// Remove the useRouter import and the router code from the signOut function

export const signOut = () => {
    // Clear any user authentication state (e.g., remove tokens from local storage)
    localStorage.removeItem('accessToken'); // Example: Remove access token from local storage
    
    // You can't use useRouter here
    
    // Redirect the user to the home page
    window.location.href = '/'; // Simple redirection
  };
  