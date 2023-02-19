import React from "react";

import { Fade } from "react-reveal";

function Expanded() {
  return (
    <div className="flex lg:hidden mr-3">
      <button className="flex items-center bg-darkPrimary px-5 py-3 rounded-full border border-darkPrimary">
        <span className="text-sm font-medium text-zinc-100">Menu</span>
        <i class="bi bi-chevron-down text-zinc-100 text-xs ml-2"></i>
      </button>
    </div>
  );
}

export default Expanded;
