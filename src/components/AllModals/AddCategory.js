import { useState } from "react";
import { addCategory } from "../../api";

const AddCategory = () => {

  const [title, setTitle] = useState();
  
  const handleSubmit = async (e)=>{
    e.preventDefault();
    const body = {
      catName: title
    }
    const res = await addCategory(body);
    console.log(res)

  }

  return (
    <div className="modal fade" id="addCategoryModal">
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header bg-success text-white">
            <h5 className="modal-title">Add Category</h5>
            <button className="close" data-dismiss="modal">
              <span>×</span>
            </button>
          </div>
          <div className="modal-body">
            <form>
              <div className="form-group">
                <label htmlFor="title">Title</label>
                <input type="text" className="form-control" onChange={(e)=> setTitle(e.target.value)} />
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button className="btn btn-success" data-dismiss="modal"  onClick={handleSubmit}>
              Add Category
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddCategory;
