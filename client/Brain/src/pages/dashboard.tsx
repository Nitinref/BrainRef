import { useState, useEffect } from 'react';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { CreateContentModal } from '../components/CreateContentModal';
import { PlusIcon } from '../icons/PlusIcon';
import { ShareIcon } from '../icons/ShareIcon';
import '../index.css';
import { Sidebar } from '../components/Sidebar';
import { useContent } from '../hooks/useContent';
import { BACKEND_URL } from '../config';
import axios from 'axios';

export function Dashboard() {
    const [modalOpen, setModalOpen] = useState(false);
  const contents = useContent();
   


    return (
        <div>
            <Sidebar />
            <div className='p-4 ml-72 min-h-screen bg-gray-100 border-1'>
                <CreateContentModal open={modalOpen} onClose={() => setModalOpen(false)} />

                <div className='flex justify-end gap-4'>
                    <Button 
                        onClick={() => setModalOpen(true)} 
                        variant="primary" 
                        text="Add Content" 
                        startIcon={<PlusIcon />} 
                    />
                    <Button onClick={async()=>{
                      const response = await  axios.post(`${BACKEND_URL}/api/v1/brain/share`,{
                            share:true
                        },{
                          headers:{
                            "Authorization": localStorage.getItem("token")
                          }
                        });
                       const shareUrl =  `http://localhost:5173/share/${response.data.hash}`;
                       alert(shareUrl);
                    }} variant="secondary" text="Share Brain" startIcon={<ShareIcon />} />
                </div>

                <div className='flex'>
                    {contents.map(({ type, link, title }) => <Card key={link} type={type} link={link} title={title} />
                    )}
                </div>
            </div>
        </div>
    );
}

