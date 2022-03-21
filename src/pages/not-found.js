import { useEffect } from "react";
export default function NotFound() {
  useEffect(() => {
    document.title = "Not Found - Instagram";
  }, []);
  return (
    // <div className="bg-gray-background">
    //   <div className="mx-auth max-w-screen-lg">
    //     <p className="text-center text-2xl">Not Found!</p>
    //   </div>
    // </div>
    <div class="bg-gradient-to-r from-purple-300 to-blue-200">
      <div class="w-9/12 m-auto py-16 min-h-screen flex items-center justify-center">
        <div class="bg-white shadow overflow-hidden sm:rounded-lg pb-8">
          <div class=" border-gray-200 text-center pt-8">
            <h1 class="text-9xl font-bold text-purple-400">404</h1>
            <h1 class="text-6xl font-medium py-8">oops! Page not found</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
