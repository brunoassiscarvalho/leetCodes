import {infiniteLoop} from "./bestPratice";

describe("Best Pratice", () => {
  it("test-left-1", () => {
    expect(infiniteLoop( [[1,2,3],[4,5,6],[7,8,9]],"left",1)).toEqual([[2,3,4],[5,6,7],[8,9,1]]);   
  });
  it("test-right-1", () => {
    expect(infiniteLoop( [[1,2,3],[4,5,6,7],[8,9]],"right",1)).toEqual([[9,1,2],[3,4,5,6],[7,8]]);   
  });
  it("test-left-2", () => {
    expect(infiniteLoop( [[1,2,3],[4,5,6,7,8],[9]],"left",2)).toEqual([[3,4,5],[6,7,8,9,1],[2]]);
  });
  it("test-right-2", () => {
    expect(infiniteLoop( [[1,2,3,4],[5],[6,7,8,9]],"right",2)).toEqual([[8,9,1,2],[3],[4,5,6,7]]);
  });
  it("test-left-3", () => {
    expect(infiniteLoop( [[1],[2,3,4,5,6],[7,8,9]],"left",3)).toEqual([[4],[5,6,7,8,9],[1,2,3]]);
  });
});

