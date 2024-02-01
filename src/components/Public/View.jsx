import React from "react";

const View = () => {
  const Data = [{

     sno:1,
     title:"H. R. Khan, M. A. Hasan, M. Kazmi, N. Fayyaz, H. Khalid, and S. A. Qazi, “A Holistic Approach to Urdu Language Word Recognition using Deep Neural Networks, ” Eng. Technol. Appl. Sci. Res., vol. 11, no. 3, pp. 7140–7145, Jun. 2021, doi: 10.48084/etasr.4143.",
     year: 2021

  }, {
    sno:2,
    title:"Z. Tabassum, A. Aziz, M. Kazmi, and S. A. Qazi, “A Robust Wavelet Based Digital Image Watermarking Technique Using FPGA,” 2015.",
    year:2015

  }, {
    sno:3,
    title:"M. Kazmi, M. Tabasum Shoaib, A. Aziz, H. Raza Khan, and S. Ahmed Qazi, “An Efficient IIoT-Based Smart  Sensor Node for Predictive Maintenance of Induction Motors,” Computer Systems Science and Engineering,  vol. 47, no. 1, pp. 255–272, 2023, doi: 10.32604/csse.2023.038464.",
    year:2023
  }, {
    sno:4,
    title:"I. Khan, S. Wali, Y. A. Farrukh, M. A. Fasih, M. H. Ul Haq, and M. Kazmi, “Development of Open-Source,  Edge Energy Management System for Tactical Power Networks,” preprint, Sep. 2022. doi: 10.36227/techrxiv.20964400.v1.",
    year:2022
  }, {
    sno:5,
    title:"M. Kazmi, A. Aziz, P. Akhtar, and D.-S. Kundi, “FPGA Based Compact and Efficient Full Image Buffering for Neighborhood Operations,” AECE, vol. 15, no. 1, pp. 95–104, 2015, doi: 10.4316/AECE.2015.01014.",
    year:2015
  }, {
    sno:6,
    title:"F. Sameen, A. Momin Kazi, M. Kazmi, M. A Abbasi, S. Ahmed Qazi, and L. K Stergioulas, “Improving Routine Immunization Coverage Through Optimally Designed Predictive Models,” Computers, Materials & Continua,  vol. 70, no. 1, pp. 375–395, 2022, doi: 10.32604/cmc.2022.019167.",
    year:2022
  },{
    sno:7,
    title:"R. Zia, P. Akhter, and M. Kazmi, “Performance Comparison of LRBAC Method with DRLSE for the Segmentation of Tumors in MRI Images,” Issue S, vol. 34, 2015.",
    year:2015
  }
  ,{
    sno:8,
    title:"M. Kazmi, F. Yasir, S. Habib, M. S. Hayat, and S. A. Qazi, “Photometric Ligature Extraction Technique for Urdu Optical Character Recognition,” Eng. Technol. Appl. Sci. Res., vol. 11, no. 6, pp. 7968–7973, Dec. 2021, doi:10.48084/etasr.4596.",
    year:2021
  },{
    sno:9,
    title:"M. Kazmi, A. Aziz, H. R. Khan, S. A. Qazi, and L. K. Stergioulas, “Resource-Efficient Image Buffer  Architecture for Neighborhood Processors,” IEEE Access, vol. 8, pp. 181964–181975, 2020, doi: 10.1109 ACCESS.2020.3025344. ",
    year:2020
  },{
    sno:10,
    title:"S. A. A. Taqvi et al., “Simultaneous fault diagnosis based on multiple kernel support vector machine in nonlinear dynamic distillation column,” Energy Science & Engineering, vol. 10, no. 3, pp. 814–839, Mar. 2022, doi: 10.1002/ese3.1058.",
    year:2022
  },{
    sno:11,
    title:"A. Mustafa, M. Kazmi, H. R. Khan, S. A. Qazi, and S. H. Lodi, “Towards a Carbon Neutral and Sustainable  Campus: Case Study of NED University of Engineering and Technology,” Sustainability, vol. 14, no. 2, p. 794, Jan. 2022, doi: 10.3390/su14020794.",
    year:2022
  }

];

  return (
    <div>
    <h1 className="text-3xl font-bold ml-6">Our Publications</h1>

    <div className=" mx-auto w-[96%] overflow-x-auto mt-10">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase text-center bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3 font-bold text-xl">
              S.No
            </th>
            <th scope="col" className="px-6 py-3 font-bold text-xl">
              Title
            </th>
            <th scope="col" className="px-6 py-3 font-bold text-xl">
              Year
            </th>
          </tr>
        </thead>
        <tbody >


          {/* Map funtion for display Data */}


          {Data.map((item, i) => (
            
            <tr key={i} className="bg-white mt-10 border-2  sm:text-left dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-lg text-black  whitespace-nowrap dark:text-white"
              >
                {item.sno}
              </th>
              <td className="px-6 py-4 flex text-lg justify-between text-black">
                {item.title}
                <a href="#" className="border-2 ml-5 h-2 underline">
                  View
                </a>
              </td>
              <td className="px-6 py-4 text-lg text-black">{item.year}</td>
            </tr>
          ))}

          {/* End of Map Function */}
        </tbody>
      </table>
    </div>
  </div>
  );
};

export default View;
