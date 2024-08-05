import React from 'react'
import { Link } from 'react-router-dom'

const Addnewsample = () => {
  return (
    <div className='w-100 pl-3 pt-2'>
     <div className='w-100 h-10 flex flex-row justify-between '> 
<h1 className='fw-bold'style={{fontSize:"22px"}}> Add New Sample </h1>

<div className='link-box w-80 h-10 flex flex-row  me-5 gap-5'style={{border:"1px solid purple",borderLeft:"none",borderRight:"none",borderTop:"none"}}> 
<Link to='/samplelist' className='ordersummary h-10 w-40 pl-7 pt-2 text-white bg-purple-500'>Sample List
</Link>
<Link to='/addnewsample'className='ordersummary h-10 w-40 pl-5 pt-2 text-white bg-purple-500'> Add New Sample
</Link>
</div>
      </div>
      <hr className='bg-slate-700  w-100 mt-3'/>
<div className='w-75  h-10'>

        <div className='w-100 flex flex-row gap-8 mt-3'>
<select className="select h-10 w-50 pl-2 text-center"style={{border:"1px solid  grey", borderRadius:"0.4rem"}}>
    <option selected>    Select a Order
    </option>
    <option>0000005</option>
    <option>0000003</option>
    <option>0000002</option>
    <option>0000001</option>

   
</select>
<input type='text'  placeholder='Search' className=" w-50 h-10 pl-3 text-center" style={{border:"1px solid grey",borderRadius:"0.4rem"}} />
</div>  
  
</div>

<div className='w-100 bg-orange-200'>

</div>


{/* Table */}
<div className="table-responsive responsive-table mt-4 pb-0 pr-3 " >
  <table className="table table-two daily-production-table-print w-auto ms-2 mw-1000 booking-table" id="erp-table">
    <thead>
      <tr className='' style={{border:"2px solid grey"}}>
        <th className='' rowSpan={2} style={{border:"1px solid grey"}}><strong>Style</strong></th>
        <th rowSpan={2} style={{border:"1px solid grey"}}><strong>Color</strong></th>
        <th rowSpan={2} style={{border:"1px solid grey"}}><strong>Item</strong></th>
        <th rowSpan={2}  style={{border:"1px solid grey"}}><strong>Garments QTY</strong></th>
        <th rowSpan={2} style={{border:"1px solid grey"}}><strong>Sample Type</strong></th>
        <th className='' style={{border:"1px solid grey"}} colSpan={8}><strong>Size</strong></th>
      </tr>
      <tr>
        <th><input type="text" name="header[size_xs]" defaultValue="XS" className="form-control reset-input" /></th>
        <th><input type="text" name="header[size_s]" defaultValue="S" className="form-control reset-input" /></th>
        <th><input type="text" name="header[size_m]" defaultValue="M" className="form-control reset-input" /></th>
        <th><input type="text" name="header[size_l]" defaultValue="L" className="form-control reset-input" /></th>
        <th><input type="text" name="header[size_xl]" defaultValue="XL" className="form-control reset-input" /></th>
        <th><input type="text" name="header[size_xxl]" defaultValue="XXL" className="form-control reset-input" /></th>
        <th><input type="text" name="header[size_3xl]" defaultValue="3XL" className="form-control reset-input" /></th>
        <th><input type="text" name="header[size_4xl]" defaultValue="4XL" className="form-control reset-input" /></th>
      </tr>
    </thead>
    <tbody>
      <tr className="position-relative">
        <td><div className="add-btn-one"><i className="fal fa-plus" aria-hidden="true" /></div></td>
        <td><div className="tr-remove-btn remove-one"><i className="fas fa-trash" /></div></td>
      </tr>
    </tbody>
  <div className='bg-orange-300 text-white w-5 text-center '>+</div>

  </table>
</div>



{/* button */}
<div className=' w-96 mt-3 flex flex-row gap-3 ms-96  '>
    <button className=' btn btn-join w-48 h-11 bg-white' style={{borderRadius:"5px",border:"1px solid grey"}}>Cancel</button>
    <button className='w-48 h-11 text-white bg-purple-500' style={{borderRadius:"5px"}}>Save</button>

</div>

      </div>
  )
}

export default Addnewsample
