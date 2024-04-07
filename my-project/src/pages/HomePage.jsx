import React from 'react';
import { LeftBar } from '../components/LeftBar';
import RightBar from '../components/RightBar';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import TextFieldsIcon from '@mui/icons-material/TextFields';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import { useNavigate } from 'react-router-dom';

const CardComponent = ({ icon, title }) => (
  <div className="flex flex-col items-center justify-center bg-yellow-500 rounded-xl shadow-md mx-4 my-4 text-white hover:bg-blue-600 transition duration-300 w-48 h-48 p-6">
    {icon}
    <h2 className="text-xl font-semibold mt-4 mb-2">{title}</h2>
  </div>
);

export const MiddleCards = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="text-center text-3xl font-bold mb-4 bg-gray-300 p-2 rounded-lg">Level 1</div>
      <div className="flex justify-center my-4">
        <CardComponent
          icon={<MenuBookIcon style={{ fontSize: 40 }} />}
          title="Learn"
          onClick={() => navigate('/quiz')}
        />
        <CardComponent
          icon={<DesignServicesIcon style={{ fontSize: 40 }} />}
          title="Evaluate"
        />
        <CardComponent
          icon={<EmojiEventsIcon style={{ fontSize: 40 }} />}
          title="Earn Points"
        />
      </div>
      <hr className="my-4" />
      
      <div className="text-center text-3xl font-bold mb-4 bg-gray-300 p-2 rounded-lg">Level 2</div>
      <div className="flex justify-center my-4">
        <CardComponent
          icon={<MenuBookIcon style={{ fontSize: 40 }} />}
          title="Learn"
        />
        <CardComponent
          icon={<DesignServicesIcon style={{ fontSize: 40 }} />}
          title="Evaluate"
        />
        <CardComponent
          icon={<EmojiEventsIcon style={{ fontSize: 40 }} />}
          title="Earn Points"
        />
      </div>
      <hr className="my-4" />

      <div className="text-center text-3xl font-bold mb-4 bg-gray-300 p-2 rounded-lg">Level 3</div>
      <div className="flex justify-center my-4">
        <CardComponent
          icon={<MenuBookIcon style={{ fontSize: 40 }} />}
          title="Learn"
        />
        <CardComponent
          icon={<DesignServicesIcon style={{ fontSize: 40 }} />}
          title="Evaluate"
        />
        <CardComponent
          icon={<EmojiEventsIcon style={{ fontSize: 40 }} />}
          title="Earn Points"
        />
      </div>
    </>
  );
};

export const HomePage = () => {
  return (
    <> 
      <LeftBar />
      <MiddleCards />
      <RightBar />
    </>
  );
};

export default HomePage;
