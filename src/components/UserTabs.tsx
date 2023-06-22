import clsx from "clsx";
import React from "react";

export default function UserTabs({ userId, setUserId }) {
  const users = [1, 2, 3, 4, 5];
  return (
    <ul className="flex gap-4">
      {users.map((u) => (
        <li key={u}>
          <button
            onClick={() => setUserId(u)}
            className={clsx(
              "bg-yellow-400 py-2 px-4 rounded-lg",
              userId === u && "bg-yellow-600"
            )}
          >{`User ${u}`}</button>
        </li>
      ))}
    </ul>
  );
}
