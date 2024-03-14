import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateHelperSlice } from "../store/slices/helperSlice";

export function useTypeWriter(info,animate) {


  const [displayResponse, setDisplayResponse] = useState("");

  const dispatch = useDispatch();
  // const isLoading = useSelector((state) => {
  //   return state.chatStore.isLoading;
  // });
  useEffect(() => {

    if(animate)
    {
    let i = 0;
    const stringResponse = info;

    // if (isLoading) {
    //   var element = document.getElementById("typed");
    //   element.classList.add("typed");
    //   return;
    // }

    dispatch(updateHelperSlice({name:"showWave",value:true}))
    if (stringResponse.length === 0) {
      var element = document.getElementById("typed");
      element.classList.remove("typed");
      if (info.table) {
        let x = "table";

        document.getElementById(x).style.display = "block";
      }

      if (info.link) {
        let x = "link";

        document.getElementById(x).style.display = "block";
      }
        if (info?.images?.length>0) {
          let x = "images";

          document.getElementById(x).style.display = "block";
        }
      return;
    }

    var element = document.getElementById("typed");
    element.classList.add("typed");
    const intervalId = setInterval(() => {
      setDisplayResponse(stringResponse.slice(0, i));
      var objDiv = document.getElementById("scroll");
      objDiv.scrollTop = objDiv.scrollHeight;
      if (i > stringResponse.length) {
        clearInterval(intervalId);
        element.classList.remove("typed");
     
        dispatch(updateHelperSlice({name:"showWave",value:false}))
    

        // setshowimage(true);
        var objDiv = document.getElementById("scroll");
        objDiv.scrollTop = objDiv.scrollHeight;
      }

      i++;
    }, 10);

    return () => clearInterval(intervalId);
  }
  else{
    setDisplayResponse(info.answer)
  }


  }, [info.answer, info.link]);

  return { displayResponse };
}
