import React from "react";

import Bookmark from "../Bookmark/Bookmark";


function Bookmarks({bookmarks}) {
  return (
    
      <div className="md:w-1/3 bg-tomato-200 ml-4 mt-2">
        <h2 className="text-3xl text-center">BookMark : {bookmarks.length}</h2>
        {
            bookmarks.map((bookmark,idx)=><Bookmark key={idx} bookmark={bookmark}></Bookmark>)
        }
      </div>
    
  );
}

export default Bookmarks;
