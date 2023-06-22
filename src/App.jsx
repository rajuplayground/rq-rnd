import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import UserTabs from "./components/UserTabs";
import { useState } from "react";

function App() {
  const [userId, setUserId] = useState(0);
  const [enabled, setEnabled] = useState(false);
  const {
    isLoading,
    isInitialLoading,
    data: user,
    isSuccess,
  } = useQuery({
    queryKey: ["user", userId],
    queryFn: () => {
      return fetch(`https://jsonplaceholder.typicode.com/users/${userId}`).then(
        (res) => res.json()
      );
    },
    staleTime: ms("4s"),
    enabled: enabled,
  });

  const changeUser = (user) => {
    setEnabled(true);
    setUserId(user);
  };

  console.log(isInitialLoading);
  console.log(isLoading);

  return (
    <div className="p-10">
      <UserTabs userId={userId} setUserId={changeUser} />

      <div className="my-4 p-4 rounded-lg border-[3px] border-black">
        {isInitialLoading && isLoading && <p>Loading...</p>}
        {isSuccess && (
          <div>
            <h2>{user.name}</h2>
          </div>
        )}
      </div>

      <div></div>
    </div>
  );
}

export default App;
