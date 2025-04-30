
import axios from "axios";
import { useEffect,useRef, useState } from "react"

import { toast } from "react-toastify"
import uploaddet from '../../services/uploaddetails'
import { useNavigate ,useLoaderData,useParams} from "react-router-dom";
const upload = () => {
    const [file, setFile] = useState(null);
    const [progress, setProgress] = useState(0);
    const [status, setStatus] = useState('idle');
    const [res, setRes] = useState(null);
    const[IDD,setID]=useState()
    const fileRef = useRef(null);
    const allowedFileSize = 1000 * 1024;
    const cloud_name = "dwtgtvxgz"
    const preset_key = "i0yzs8df"
const [subjects,setSubject]=useState('')
const [tutorid,setTotutid]=useState('')
const [products,setProduct]=useState()
const [URL,setURL]=useState()
const {ID}=useParams()
console.log(ID)
const  {user} = useLoaderData();
const navigate = useNavigate();
useEffect(()=>{
    getuser()
              },[])
async function getuser() {
    try {
     const response = await fetch("http://localhost:3001/getTutors"); // Add a valid URL here
     //const response = await fetch("http://localhost:3001/getTutorsdetails?keyword=on"); // Add a valid URL here
      const {tutor} = await response.json(); // Add await before response.json()
      console.log(tutor);
      setProduct(tutor)
     
    } catch (err) {
      console.log("Error:", err);
    }
  }

console.log(products)
    const handleFileChange = ({e, dropped=false}) =>{
        const tempFile = dropped === true ? e : e.target.files[0]
        if(!dropped && (!e.target.files || !e.target.files.length > 0)){
            return toast.error('Please select a single file')
        }
        // if(e.target.files[0].size > allowedFileSize) {
        //     fileRef.current.value = ''
        //     return toast.error('Please upload file less than 400kb')
        // }
        try {
            
            setStatus('Uploading')
            setFile(tempFile);
            const formData = new FormData();
            formData.append('file', tempFile);
            formData.append('upload_preset', preset_key)
            formData.append('cloud_name', cloud_name)

            axios.post(`https://api.cloudinary.com/v1_1/${cloud_name}/upload`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
                onUploadProgress: (progressEvent) => {
                    const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total)
                    setProgress(percentCompleted)
                }
                               
            }).then(res => {
                setStatus("done");
                setRes(res?.data);
                console.log({res});
                toast.success('File uploaded successfully')

                    .catch((error) => {
                        toast.error(error.response.data.message);
                    });
            }).catch(error=>{
                fileRef.current.value = ''
                setProgress(0);
                setStatus("failed");
                toast.error("Failed to upload")
            })
        } catch (err) {
            fileRef.current.value = ''
            setProgress(0);
            setStatus("failed");
            toast.error("Failed to upload")
        }
    }
    const handleDrop = e =>{
        e.preventDefault();
        // console.log(e.dataTransfer.files[0], ' this is d4rop event')
        const droppedFile = e.dataTransfer.files[0];
        setFile(droppedFile)
        handleFileChange({e: droppedFile, dropped: true})
    }
    const handleDragOver = e =>{
        e.preventDefault();
    }
    const Jionclass = () =>{
        window.open("https://us04web.zoom.us/s/74208130527?zak=eyJ0eXAiOiJKV1QiLCJzdiI6IjAwMDAwMiIsInptX3NrbSI6InptX28ybSIsImFsZyI6IkhTMjU2In0.eyJpc3MiOiJ3ZWIiLCJjbHQiOjAsIm1udW0iOiI3NDIwODEzMDUyNyIsImF1ZCI6ImNsaWVudHNtIiwidWlkIjoiMnF3UnRoMUpSUFNydnBiWDl3aW0xZyIsInppZCI6ImM2ZTAxNmNkZmM4MTQ0Nzg4NDhlODk2ZTE1OWE1MDk1Iiwic2siOiI2NzIxMDM0Mzk0OTgzMjExODYwIiwic3R5IjoxMDAsIndjZCI6InVzMDQiLCJleHAiOjE3NDQ2NTg3MTQsImlhdCI6MTc0NDY1MTUxNCwiYWlkIjoiZ3VvbC1WaXJRNXVXOHpzVDBGNXgtdyIsImNpZCI6IiJ9.VVQUqW6ksx18wgrt-dIDXcd3WNDPVPDTSXfQ-kOFcdw");

    }
    
    const createtutor = (e)=>{
        e.preventDefault();
        if (subjects.trim() === '') {
            toast.warning('Please enter subject name')
            return; 
          }
          console.log(tutorid)
        uploaddet.Createtutor({tutordetid:ID,tutorid:tutorid,tutorname:user.name,subject:subjects,url:res.secure_url})
         .then((response) => {
                        toast.success(response.data.message);
        
                     
        
                        // navigate the user to the dashboard page
                        setTimeout(() => {
                              navigate('/tutor/uploaddetails');
                        }, 500);
                    })
                    .catch((error) => {
                        toast.error(error.response.data.message);
                    });
            

    }
  return (
    <div className="container mt-5 text-center h-20">
         <h4 className="text-xl text-gray-600" >Upload Recorded</h4>
        <div className="max-w-2xl mx-auto mt-5 bg-white shadow-md p-5 rounded-lg overflow-hidden border border-gray-200 px-5 py-5">
        <div class="grid h-20 grid-cols-3 content-start gap-4 ...">
 <label className="w-50">select TutorName</label>
                                    <select onChange={(e)=>{
                                        setTotutid(e.target.value)
                                        
                                    }}
                                    className="form-control">
                                       <option>Select TutorName</option>
                                        {
                                          products && products.map((product)=>{
                                            return(
                                                
                                                <option key={product._id}  value={product._id}>{product.Name}
                                                
                                                </option>
                                               
                                            )
                                          })
                                        }
                                        
                                    </select>
                                   
                                    </div>
        <div class="grid h-50 grid-cols-3 content-start gap-4 ...">
            
         <label className="w-25">Subject</label>
           <input
                                      className="shadow appearance-none border rounded w-75 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                      id="username"
                                      type="text"
                                      placeholder="subject"
                                      defaultValue={subjects}
                                      onChange={(e) => (setSubject(e.target.value))}
                                  />
                                  </div>
                                 
                                
        <div>
           
        </div>
       
        <div class="grid  grid-cols-8 content-start gap-4 ..."> <button onClick={Jionclass}  type="button" className=" -translate-y-25 w-25 translate-x-100 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medum rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Join meeting</button>
        <button onClick={createtutor}  type="button" className=" -translate-y-25 translate-x-50 w-25 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medum rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">save</button>
        </div>
        
        {status !== 'idle' && status !== 'done' && 
        <span className='progress_bar bg-gray-200 w-full h-3  rounded relative'>
            <p className='absolute right-0 top-0 -translate-y-5 text-xs'>{progress}%</p>
            <span className='filled_progress bg-indigo-500 absolute left-0 top-0 z-1 h-3 rounded' style={{width: `${progress}%`}}></span>
        </span>
        }
        {status !== 'done' && 
        <>
        <input ref={fileRef} id="file_upload_btn" type="file" onChange={(e)=> handleFileChange({e})} hidden />
        <label htmlFor="file_upload_btn" className='cursor-pointer' onDrop={handleDrop} onDragOver={handleDragOver}>
            <div className=' -translate-y-45 px-2 py-8 border-2 border-dotted border-indigo-500 w-[250px] flex flex-col gap-2 items-center justify-center p-4 rounded-md'>
            <svg className='w-5' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 15L12 2M12 2L15 5.5M12 2L9 5.5" stroke="#1C274C" strokeWidth="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M8 22.0002H16C18.8284 22.0002 20.2426 22.0002 21.1213 21.1215C22 20.2429 22 18.8286 22 16.0002V15.0002C22 12.1718 22 10.7576 21.1213 9.8789C20.3529 9.11051 19.175 9.01406 17 9.00195M7 9.00195C4.82497 9.01406 3.64706 9.11051 2.87868 9.87889C2 10.7576 2 12.1718 2 15.0002L2 16.0002C2 18.8286 2 20.2429 2.87868 21.1215C3.17848 21.4213 3.54062 21.6188 4 21.749" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"></path> </g></svg>
            {file?.name.substring(0, 16)}{file?.name.length > 16 && `.${file?.name.split('.')[1]}`}
            <p >Upload a File</p>
            
            </div>
        </label>
        </>
        }
    
      
       
        
      {
      
      }
  
    </div>
                               
                                  
    
    </div>
  )
  
}

export default upload