

// import React from 'react';
// import styles from './Home.module.css';
// import Carousel from 'react-multi-carousel';
// import 'react-multi-carousel/lib/styles.css';

// export default function Home() {
//   const responsive = {
//     superLargeDesktop: {
//       breakpoint: { max: 4000, min: 3000 },
//       items: 7
//     },
//     desktop: {
//       breakpoint: { max: 3000, min: 1024 },
//       items: 4
//     },
//     tablet: {
//       breakpoint: { max: 1024, min: 464 },
//       items: 2
//     },
//     mobile: {
//       breakpoint: { max: 464, min: 0 },
//       items: 1
//     }
//   };

//   return (
//     <>
//       <div className={styles.back}>
//         <div className={styles.layer}></div>
//       </div>

//       <Carousel autoPlay={500} infinite={true} arrows={false} responsive={responsive}>
//         <div className={styles.border}><img className="w-100" src="https://s3-alpha-sig.figma.com/img/d73b/5913/bc830d6295ca64d6a68d48b3da92a9e0?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=p4ieP2TFjj29cEzYCrYJoumEqo9upuyyYLRJeOPTfkZ7vpoXDyvisW2DrCMXTyP6HHQjDqU6EEIwjqYlGZVj~5entlvQfqY7aLXgn~daIO-QJ2QXhhhFR1w9IZrHZdOBvsRWc77bmynNKdai8PF7AMXniRZz3T8y~h~ku-M1xgCeXFk8fYAI-nNCvghxHQLFZfNnqHxtlyPQDldDFC6OK6OLohG3e4nX29EehDrMIOtZq34yLejIK1Ic~n4uXad5dERffCrCSP6Fupi-e5U0Kl45ECONelie4JJ65ysOpm~kA5gzk4~79tV13rgNCu-Zix-j-WwQwzZlqjdqZ2amzw" />
//           <p className='text-black text-center overflow-hidden'>Leather Jacket</p>
//         </div>

//         <div className={styles.border}><img className="w-100" src="https://s3-alpha-sig.figma.com/img/d73b/5913/bc830d6295ca64d6a68d48b3da92a9e0?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=p4ieP2TFjj29cEzYCrYJoumEqo9upuyyYLRJeOPTfkZ7vpoXDyvisW2DrCMXTyP6HHQjDqU6EEIwjqYlGZVj~5entlvQfqY7aLXgn~daIO-QJ2QXhhhFR1w9IZrHZdOBvsRWc77bmynNKdai8PF7AMXniRZz3T8y~h~ku-M1xgCeXFk8fYAI-nNCvghxHQLFZfNnqHxtlyPQDldDFC6OK6OLohG3e4nX29EehDrMIOtZq34yLejIK1Ic~n4uXad5dERffCrCSP6Fupi-e5U0Kl45ECONelie4JJ65ysOpm~kA5gzk4~79tV13rgNCu-Zix-j-WwQwzZlqjdqZ2amzw" />
//           <p className='text-black text-center overflow-hidden'>Leather Jacket</p>
//         </div>

//         <div className={styles.border}><img className="w-100" src="https://s3-alpha-sig.figma.com/img/d73b/5913/bc830d6295ca64d6a68d48b3da92a9e0?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=p4ieP2TFjj29cEzYCrYJoumEqo9upuyyYLRJeOPTfkZ7vpoXDyvisW2DrCMXTyP6HHQjDqU6EEIwjqYlGZVj~5entlvQfqY7aLXgn~daIO-QJ2QXhhhFR1w9IZrHZdOBvsRWc77bmynNKdai8PF7AMXniRZz3T8y~h~ku-M1xgCeXFk8fYAI-nNCvghxHQLFZfNnqHxtlyPQDldDFC6OK6OLohG3e4nX29EehDrMIOtZq34yLejIK1Ic~n4uXad5dERffCrCSP6Fupi-e5U0Kl45ECONelie4JJ65ysOpm~kA5gzk4~79tV13rgNCu-Zix-j-WwQwzZlqjdqZ2amzw" />
//           <p className='text-black text-center overflow-hidden'>Leather Jacket</p>
//         </div>

//         <div className={styles.border}><img className="w-100" src="https://s3-alpha-sig.figma.com/img/d73b/5913/bc830d6295ca64d6a68d48b3da92a9e0?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=p4ieP2TFjj29cEzYCrYJoumEqo9upuyyYLRJeOPTfkZ7vpoXDyvisW2DrCMXTyP6HHQjDqU6EEIwjqYlGZVj~5entlvQfqY7aLXgn~daIO-QJ2QXhhhFR1w9IZrHZdOBvsRWc77bmynNKdai8PF7AMXniRZz3T8y~h~ku-M1xgCeXFk8fYAI-nNCvghxHQLFZfNnqHxtlyPQDldDFC6OK6OLohG3e4nX29EehDrMIOtZq34yLejIK1Ic~n4uXad5dERffCrCSP6Fupi-e5U0Kl45ECONelie4JJ65ysOpm~kA5gzk4~79tV13rgNCu-Zix-j-WwQwzZlqjdqZ2amzw" />
//           <p className='text-black text-center overflow-hidden'>Leather Jacket</p>
//         </div>

//         <div className={styles.border}><img className="w-100" src="https://s3-alpha-sig.figma.com/img/d73b/5913/bc830d6295ca64d6a68d48b3da92a9e0?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=p4ieP2TFjj29cEzYCrYJoumEqo9upuyyYLRJeOPTfkZ7vpoXDyvisW2DrCMXTyP6HHQjDqU6EEIwjqYlGZVj~5entlvQfqY7aLXgn~daIO-QJ2QXhhhFR1w9IZrHZdOBvsRWc77bmynNKdai8PF7AMXniRZz3T8y~h~ku-M1xgCeXFk8fYAI-nNCvghxHQLFZfNnqHxtlyPQDldDFC6OK6OLohG3e4nX29EehDrMIOtZq34yLejIK1Ic~n4uXad5dERffCrCSP6Fupi-e5U0Kl45ECONelie4JJ65ysOpm~kA5gzk4~79tV13rgNCu-Zix-j-WwQwzZlqjdqZ2amzw" />
//           <p className='text-black text-center overflow-hidden'>Leather Jacket</p>
//         </div>

//         <div className={styles.border}><img className="w-100" src="https://s3-alpha-sig.figma.com/img/d73b/5913/bc830d6295ca64d6a68d48b3da92a9e0?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=p4ieP2TFjj29cEzYCrYJoumEqo9upuyyYLRJeOPTfkZ7vpoXDyvisW2DrCMXTyP6HHQjDqU6EEIwjqYlGZVj~5entlvQfqY7aLXgn~daIO-QJ2QXhhhFR1w9IZrHZdOBvsRWc77bmynNKdai8PF7AMXniRZz3T8y~h~ku-M1xgCeXFk8fYAI-nNCvghxHQLFZfNnqHxtlyPQDldDFC6OK6OLohG3e4nX29EehDrMIOtZq34yLejIK1Ic~n4uXad5dERffCrCSP6Fupi-e5U0Kl45ECONelie4JJ65ysOpm~kA5gzk4~79tV13rgNCu-Zix-j-WwQwzZlqjdqZ2amzw" />
//           <p className='text-black text-center overflow-hidden'>Leather Jacket</p>
//         </div>

//         <div className={styles.border}><img className="w-100" src="https://s3-alpha-sig.figma.com/img/d73b/5913/bc830d6295ca64d6a68d48b3da92a9e0?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=p4ieP2TFjj29cEzYCrYJoumEqo9upuyyYLRJeOPTfkZ7vpoXDyvisW2DrCMXTyP6HHQjDqU6EEIwjqYlGZVj~5entlvQfqY7aLXgn~daIO-QJ2QXhhhFR1w9IZrHZdOBvsRWc77bmynNKdai8PF7AMXniRZz3T8y~h~ku-M1xgCeXFk8fYAI-nNCvghxHQLFZfNnqHxtlyPQDldDFC6OK6OLohG3e4nX29EehDrMIOtZq34yLejIK1Ic~n4uXad5dERffCrCSP6Fupi-e5U0Kl45ECONelie4JJ65ysOpm~kA5gzk4~79tV13rgNCu-Zix-j-WwQwzZlqjdqZ2amzw" />
//           <p className='text-black text-center overflow-hidden'>Leather Jacket</p>
//         </div>

//         {/* Repeat for other items */}
//       </Carousel>

//       <div className={styles.theBackGround + " d-flex flex-column justify-content-center"}>
//         <div className={styles.layer2}></div>
//         <h1 className='overflow-hidden text-white fw-bold ms-5 z-2'>Exclusive Fashion</h1>
//       </div>
//     </>
//   );
// }







  // import React from 'react';
  // import styles from './Home.module.css';
  // import Carousel from 'react-multi-carousel';
  // import 'react-multi-carousel/lib/styles.css';

  // export default function Home() {
  //   const responsive = {
  //     superLargeDesktop: {
  //       breakpoint: { max: 4000, min: 3000 },
  //       items: 7
  //     },
  //     desktop: {
  //       breakpoint: { max: 3000, min: 1024 },
  //       items: 4
  //     },
  //     tablet: {
  //       breakpoint: { max: 1024, min: 464 },
  //       items: 2
  //     },
  //     mobile: {
  //       breakpoint: { max: 464, min: 0 },
  //       items: 1
  //     }
  //   };

  //   return (
  //     <>
  //       <div className={styles.back}>
  //         <div className={styles.layer}></div>
  //       </div>

  //       <Carousel autoPlay={500} infinite={true} arrows={false} responsive={responsive}>
  //         {[...Array(7)].map((_, index) => (
  //           <div className={`${styles.border} ${styles.imageContainer}`} key={index}>
  //             <img className="w-100" src="https://s3-alpha-sig.figma.com/img/d73b/5913/bc830d6295ca64d6a68d48b3da92a9e0?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=p4ieP2TFjj29cEzYCrYJoumEqo9upuyyYLRJeOPTfkZ7vpoXDyvisW2DrCMXTyP6HHQjDqU6EEIwjqYlGZVj~5entlvQfqY7aLXgn~daIO-QJ2QXhhhFR1w9IZrHZdOBvsRWc77bmynNKdai8PF7AMXniRZz3T8y~h~ku-M1xgCeXFk8fYAI-nNCvghxHQLFZfNnqHxtlyPQDldDFC6OK6OLohG3e4nX29EehDrMIOtZq34yLejIK1Ic~n4uXad5dERffCrCSP6Fupi-e5U0Kl45ECONelie4JJ65ysOpm~kA5gzk4~79tV13rgNCu-Zix-j-WwQwzZlqjdqZ2amzw" />
  //             <div className={styles.checkboxContainer}>
  //               <input type="checkbox" id={`checkbox-red-${index}`} className={styles.checkbox} />
  //               <label htmlFor={`checkbox-red-${index}`} className={styles.checkboxLabelRed}></label>
  //               <input type="checkbox" id={`checkbox-gray-${index}`} className={styles.checkbox} />
  //               <label htmlFor={`checkbox-gray-${index}`} className={styles.checkboxLabelgray}></label>
  //             </div>
  //             <p className="text-black text-center overflow-hidden">Leather Jacket</p>
  //             <p className="text-black text-center overflow-hidden">
  //               <span>2 color</span>
  //             </p>
  //           </div>
  //         ))}
  //       </Carousel>

  //       <div className={`${styles.theBackGround} d-flex flex-column justify-content-center`}>
  //         <div className={styles.layer2}></div>
  //         <h1 className="overflow-hidden text-white fw-bold ms-5 z-2">Exclusive Fashion</h1>
  //       </div>
  //     </>
  //   );
  // }



// import React from 'react';
// import styles from './Home.module.css';
// import Carousel from 'react-multi-carousel';
// import 'react-multi-carousel/lib/styles.css';

// export default function Home() {
//   const responsive = {
//     superLargeDesktop: {
//       breakpoint: { max: 4000, min: 3000 },
//       items: 7
//     },
//     desktop: {
//       breakpoint: { max: 3000, min: 1024 },
//       items: 4
//     },
//     tablet: {
//       breakpoint: { max: 1024, min: 464 },
//       items: 2
//     },
//     mobile: {
//       breakpoint: { max: 464, min: 0 },
//       items: 1
//     }
//   };

//   return (
//     <>
//       <div className={styles.back}>
//         <div className={styles.layer}></div>
//       </div>

//       <Carousel autoPlay={500} infinite={true} arrows={false} responsive={responsive}>
//         {[...Array(7)].map((_, index) => (
//           <div className={`${styles.border} ${styles.imageContainer}`} key={index}>
//             <img className="w-100" src="https://s3-alpha-sig.figma.com/img/d73b/5913/bc830d6295ca64d6a68d48b3da92a9e0?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=p4ieP2TFjj29cEzYCrYJoumEqo9upuyyYLRJeOPTfkZ7vpoXDyvisW2DrCMXTyP6HHQjDqU6EEIwjqYlGZVj~5entlvQfqY7aLXgn~daIO-QJ2QXhhhFR1w9IZrHZdOBvsRWc77bmynNKdai8PF7AMXniRZz3T8y~h~ku-M1xgCeXFk8fYAI-nNCvghxHQLFZfNnqHxtlyPQDldDFC6OK6OLohG3e4nX29EehDrMIOtZq34yLejIK1Ic~n4uXad5dERffCrCSP6Fupi-e5U0Kl45ECONelie4JJ65ysOpm~kA5gzk4~79tV13rgNCu-Zix-j-WwQwzZlqjdqZ2amzw" />
//             <div className={styles.checkboxContainer}>
//               <input type="checkbox" id={`checkbox-red-${index}`} className={styles.checkbox} />
//               <label htmlFor={`checkbox-red-${index}`} className={styles.checkboxLabelRed}></label>
//               <input type="checkbox" id={`checkbox-gray-${index}`} className={styles.checkbox} />
//               <label htmlFor={`checkbox-gray-${index}`} className={styles.checkboxLabelGray}></label>
//             </div>
//             <div className={styles.dotSlider}>
//               <span className={styles.dot}></span>
//               <span className={styles.dot}></span>
//               <span className={styles.dot}></span>
//             </div>
//             <div className={styles.sizeOptions}>
//               <span className={styles.size}>XS</span>
//               <span className={styles.size}>S</span>
//               <span className={styles.size}>M</span>
//               <span className={styles.size}>L</span>
//             </div>


//             <p className="text-black text-center overflow-hidden">Leather Jacket</p>
//             <p className="text-black text-center overflow-hidden">
//               <span>2 color</span>
//             </p>
//           </div>
//         ))}
//       </Carousel>

//       <div className={`${styles.theBackGround} d-flex flex-column justify-content-center`}>
//         <div className={styles.layer2}></div>
//         <h1 className="overflow-hidden text-white fw-bold ms-5 z-2">Exclusive Fashion</h1>
//       </div>
//     </>
//   );
// }



import React, { useState } from 'react';
import styles from './Home.module.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export default function Home() {
  const [activeIndexes, setActiveIndexes] = useState(Array(7).fill(0)); // Array to store active image index for each item

  const images = [
    "https://s3-alpha-sig.figma.com/img/d73b/5913/bc830d6295ca64d6a68d48b3da92a9e0?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XYxqxak0iD93PEHYi87xSY-oIOngUsQKwg9vNOM8oKk0OBAQwZG4mrl4s7JBxi0qys1Kpt3uG65zljzUpo-ki5m3WN662DdM872UpF35ACV7jYR-ptkZCKMYuz7Kj1irMo8qwSGLQmkLzzmotL7eLkr7HXz03NFC5OYa~fbYYXnmuxGErU6N2fZc12DR1wmsSq-v4LR4LC4dGmm7SFJ20sZeanlavLa24Yk6l2XjVJjJBMzSFBSFhMPkbSf9zf5b08rd9nZWEsIluMAZ-dOSSX8PZ9ybjQVWWPK~uRYSZ54jpTKFHg8IzbZq~-BLoIsmCUeXvE2Kysqyq1-cO4pchQ__",
    
    "https://s3-alpha-sig.figma.com/img/d73b/5913/bc830d6295ca64d6a68d48b3da92a9e0?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XYxqxak0iD93PEHYi87xSY-oIOngUsQKwg9vNOM8oKk0OBAQwZG4mrl4s7JBxi0qys1Kpt3uG65zljzUpo-ki5m3WN662DdM872UpF35ACV7jYR-ptkZCKMYuz7Kj1irMo8qwSGLQmkLzzmotL7eLkr7HXz03NFC5OYa~fbYYXnmuxGErU6N2fZc12DR1wmsSq-v4LR4LC4dGmm7SFJ20sZeanlavLa24Yk6l2XjVJjJBMzSFBSFhMPkbSf9zf5b08rd9nZWEsIluMAZ-dOSSX8PZ9ybjQVWWPK~uRYSZ54jpTKFHg8IzbZq~-BLoIsmCUeXvE2Kysqyq1-cO4pchQ__",

    "https://s3-alpha-sig.figma.com/img/d73b/5913/bc830d6295ca64d6a68d48b3da92a9e0?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XYxqxak0iD93PEHYi87xSY-oIOngUsQKwg9vNOM8oKk0OBAQwZG4mrl4s7JBxi0qys1Kpt3uG65zljzUpo-ki5m3WN662DdM872UpF35ACV7jYR-ptkZCKMYuz7Kj1irMo8qwSGLQmkLzzmotL7eLkr7HXz03NFC5OYa~fbYYXnmuxGErU6N2fZc12DR1wmsSq-v4LR4LC4dGmm7SFJ20sZeanlavLa24Yk6l2XjVJjJBMzSFBSFhMPkbSf9zf5b08rd9nZWEsIluMAZ-dOSSX8PZ9ybjQVWWPK~uRYSZ54jpTKFHg8IzbZq~-BLoIsmCUeXvE2Kysqyq1-cO4pchQ__"
    // Add other images here...
  ];

  const handleDotClick = (itemIndex, dotIndex) => {
    const newActiveIndexes = [...activeIndexes];
    newActiveIndexes[itemIndex] = dotIndex;
    setActiveIndexes(newActiveIndexes);
  };

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 7
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <>
      <div className={styles.back}>
        <div className={styles.layer}></div>
      </div>

      <Carousel autoPlay={500} infinite={true} arrows={false} responsive={responsive}>
        {[...Array(7)].map((_, index) => (
          <div className={`${styles.border} ${styles.imageContainer}`} key={index}>
            <img className="w-100" src={images[activeIndexes[index]]} alt="Fashion Item" />


            <div className={styles.checkboxContainer}>
              <input type="checkbox" id={`checkbox-red-${index}`} className={styles.checkbox} />
              <label htmlFor={`checkbox-red-${index}`} className={styles.checkboxLabelRed}></label>
              <input type="checkbox" id={`checkbox-gray-${index}`} className={styles.checkbox} />
              <label htmlFor={`checkbox-gray-${index}`} className={styles.checkboxLabelGray}></label>
            </div>


            <div className={styles.sizeOptions}>
              <span className={styles.size}>XS</span>
              <span className={styles.size}>S</span>
              <span className={styles.size}>M</span>
              <span className={styles.size}>L</span>
            </div>

            
            <div className={styles.dotSlider}>
              {images.map((_, dotIndex) => (
                <span
                  key={dotIndex}
                  className={`
                    ${styles.dot}
                    ${activeIndexes[index] === dotIndex ? styles.active : ''}
                  `}
                  onClick={() => handleDotClick(index, dotIndex)}
                ></span>
              ))}
            </div>

            <p className="text-black text-center ">Leather Jacket</p>
            <p className="text-black text-center ">
              <span>2 color</span>
            </p>
          </div>
        ))}
      </Carousel>

      <div className={`${styles.theBackGround} d-flex flex-column justify-content-center`}>
  <div className={styles.layer2}>
  <h1 className="text-white fw-bold ms-5 z-2">Exclusive Fashion</h1>

  </div>
</div>

    </>
  );
}