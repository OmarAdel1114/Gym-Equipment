import React from 'react';
import homeGymPhoto from '../../assets/media/About-sec/Home-Equipment.webp';
import commercialGym from '../../assets/media/About-sec/Commercial-Gym.webp';
import './sales.css';

function Sales() {
  const partitions = [
    {
      title: 'Commercial Gym',
      photo: commercialGym,
      text: ` We supply and install a complete line of commercial fitness
        equipment for all strength, training areas and gyms. We offer it
        all, even the accessories, with a wide range of brands of exercise
        equipment to fit all spaces and price. We pay even more attention to
        quality, product safety, materials, the strict quality standards,
        the attention to detail and an endless pursuit of a commitment to
        customer satisfaction.`,
    },
    // {
    //   title: 'Cardio Gym Equipment',
    //   photo: commercialGym,
    //   text: ` Cardio workouts offer a variety of ideas for using such as treadmill,
    //    stationary bike, elliptical machine and more other cardio machine at gyms or at the homes.
    //     Blue Shell Egypt support exercise fitness and to supply gyms such as apartments, hotels, health clubs,
    //      studios fitness, government agencies, professional sports teams, universities, military agencies & high school gyms, 
    //      and more. The lowest price in Egypt.`,
    // },
    {
      title: 'Home Equipment',
      photo: homeGymPhoto,
      text: `Get it done at home with one of our great home gyms! which includes the essentials that 
      can provide an unlimited amount of varied functional fitness workouts.
       It is everybody for both women and men, with home fitness equipments 
       such as multi gym, weight benches, functionak training,
        ABS, racks & more. Blue Shell has the right gym equipment for you.
         We offer premium services and the lowest price in Egypt.`,
    },
    // {
    //   title: 'Free Weights & CrossFit',
    //   photo: commercialGym,
    //   text: `An effective training option every gym needs. free weights & 
    //   functional training equipment, look good & are constructed for ease of use.
    //   We offer kits a weight room with gear that matters dumbbells, weight plates, 
    //   weight sets, kettlebell sets, barbells. Also innovative functional stations & fitness 
    //   tools which maximize results in a safe efficient manner to build true strength. With high-quality and unique products with right price`,
    // },
    {
      title: 'SPA & Therapy Equipment',
      photo: commercialGym,
      text: ` We supply and install a complete line of commercial fitness
        equipment for all strength, training areas and gyms. We offer it
        all, even the accessories, with a wide range of brands of exercise
        equipment to fit all spaces and price. We pay even more attention to
        quality, product safety, materials, the strict quality standards,
        the attention to detail and an endless pursuit of a commitment to
        customer satisfaction.`,
    },
    // {
    //   title: 'Commercial Gym Flooring',
    //   photo: commercialGym,
    //   text: ` We supply and install a complete line of commercial fitness
    //     equipment for all strength, training areas and gyms. We offer it
    //     all, even the accessories, with a wide range of brands of exercise
    //     equipment to fit all spaces and price. We pay even more attention to
    //     quality, product safety, materials, the strict quality standards,
    //     the attention to detail and an endless pursuit of a commitment to
    //     customer satisfaction.`,
    // },
    {
      title: 'Custom Lockers Rooms',
      photo: commercialGym,
      text: ` We supply and install a complete line of commercial fitness
        equipment for all strength, training areas and gyms. We offer it
        all, even the accessories, with a wide range of brands of exercise
        equipment to fit all spaces and price. We pay even more attention to
        quality, product safety, materials, the strict quality standards,
        the attention to detail and an endless pursuit of a commitment to
        customer satisfaction.`,
    },
    {
      title: 'Recreation Room',
      photo: commercialGym,
      text: ` We supply and install a complete line of commercial fitness
        equipment for all strength, training areas and gyms. We offer it
        all, even the accessories, with a wide range of brands of exercise
        equipment to fit all spaces and price. We pay even more attention to
        quality, product safety, materials, the strict quality standards,
        the attention to detail and an endless pursuit of a commitment to
        customer satisfaction.`,
    },
    {
      title: 'Sporting Goods',
      photo: commercialGym,
      text: ` We supply and install a complete line of commercial fitness
        equipment for all strength, training areas and gyms. We offer it
        all, even the accessories, with a wide range of brands of exercise
        equipment to fit all spaces and price. We pay even more attention to
        quality, product safety, materials, the strict quality standards,
        the attention to detail and an endless pursuit of a commitment to
        customer satisfaction.`,
    },
    {
      title: 'Equipment For Kids',
      photo: commercialGym,
      text: ` We supply and install a complete line of commercial fitness
        equipment for all strength, training areas and gyms. We offer it
        all, even the accessories, with a wide range of brands of exercise
        equipment to fit all spaces and price. We pay even more attention to
        quality, product safety, materials, the strict quality standards,
        the attention to detail and an endless pursuit of a commitment to
        customer satisfaction.`,
    },
    {
      title: 'Sports Shoes',
      photo: commercialGym,
      text: ` We supply and install a complete line of commercial fitness
        equipment for all strength, training areas and gyms. We offer it
        all, even the accessories, with a wide range of brands of exercise
        equipment to fit all spaces and price. We pay even more attention to
        quality, product safety, materials, the strict quality standards,
        the attention to detail and an endless pursuit of a commitment to
        customer satisfaction.`,
    },
    {
      title: 'School Supplies',
      photo: commercialGym,
      text: ` We supply and install a complete line of commercial fitness
        equipment for all strength, training areas and gyms. We offer it
        all, even the accessories, with a wide range of brands of exercise
        equipment to fit all spaces and price. We pay even more attention to
        quality, product safety, materials, the strict quality standards,
        the attention to detail and an endless pursuit of a commitment to
        customer satisfaction.`,
    },
  ];
  return (
    <div className="sales section-holder">
      <h2 className="header">BLUE SHELL EGYPT</h2>
      <h3>The Company's Sales Department</h3>
      <div className = "partitions">
        {partitions.map((partition, index) => {
          return (
            <section key={index} className={`partition`}>
              <img src={partition.photo} alt="" />
              <div className="text">
                <h4>{partition.title}</h4>
                <p>{partition.text}</p>
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}

export default Sales;
