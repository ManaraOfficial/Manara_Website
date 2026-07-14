import { memo, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SectionHeader from '../reusableComp/SectionHeader';
import CuriousMinds from '../../assets/images/CuriousMinds.jpg';
import Project28Img from '../../assets/images/Project28Img.jpg';
// import CECSImg from '../../assets/images/CECS.jpg';
// import OthersImg from '../../assets/images/Others.jpg';

const OurActivities = () => {
  const navigate = useNavigate();

  const projects = [
    { title: 'Curious Minds', description: 'Curiosity fuels education – education opens worlds', image: CuriousMinds, path: '/curious-minds' },
    { title: 'Project 28', description: 'Menstrual dignity and health for women in Nepal', image: Project28Img, path: '/project-28' },
    { title: 'CECS', description: "Fulfilling a child's wish for a future", image: CuriousMinds, path: '/cecs' },
    { title: 'Others', description: 'Others', image: CuriousMinds, path: '/others' },
  ];

  useEffect(() => {
    const preloadImages = (imageUrls) => {
      imageUrls.forEach((url) => {
        const img = new Image();
        img.src = url;
      });
    };
    preloadImages(projects.map((project) => project.image));
  }, []);

  const handleProjectClick = (path) => {
    navigate(path);
  };

  return (
    <div className='max-w-6xl text-center m-auto text-left'>
      <SectionHeader title="Our Activities" />
      <div id='project'>
        
        
        <section className='flex flex-wrap justify-center sm:justify-start sm:gap-16 gap-3'>
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-item my-4 flex flex-wrap w-90 gap-2 justify-center m-3"
              onClick={() => handleProjectClick(project.path)}
            >
                <h3 className='text-white-400 text-3xl font-semibold mt-2 project-title'>{project.title}</h3>
              <img src={project.image} alt={project.title} className="project-img" />
              
              <p className='project-title text-center'>{project.description}</p>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default memo(OurActivities);