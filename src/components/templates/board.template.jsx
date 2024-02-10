import HeaderOrganism from "../organisms/header.organism";
import BoardHeaderOrganism from "../organisms/board-header.organism";
import BoardListOrganism from "../organisms/board-list.organism";

function BoardTemplate() {
  return (
    <div>
      <HeaderOrganism></HeaderOrganism>
      <div className=" flex justify-center w-full px-32 bg-red-200 h-svh">
        <div className="w-full mt-16 ">
          <BoardHeaderOrganism></BoardHeaderOrganism>
          <BoardListOrganism></BoardListOrganism>
        </div>
      </div>
    </div>
  );
}

export default BoardTemplate;
