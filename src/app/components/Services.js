import React from "react";

export default function Services(data) {
  let {
    icon,
    title,
    description,
    iclass = "",
    hclass = "",
    pclass = "",
  } = data;
  return (
    <aside>
      <div className="flex gap-3">
        <div className={`text-4xl text-[#ff0080] ${iclass}`}>{icon}</div>
        <div>
          <h1 className={`text-white/80 font-black ${hclass}`}>{title}</h1>
          <p className={`text-white/50 ${pclass}`}>{description}</p>
        </div>
      </div>
    </aside>
  );
}
