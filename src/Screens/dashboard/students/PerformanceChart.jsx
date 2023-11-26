// import React from "react";
// import {
//   Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Legend
// } from "recharts";

// // Sample data with Current, Mean, Low, and High scores for each subject
// const data = [
//   {
//     subject: "Math",
//     Current: 100,
//     Mean: 110,
//     Low: 90,
//     High: 130,
//     fullMark: 150
//   },
//   {
//     subject: "Chinese",
//     Current: 105,
//     Mean: 100,
//     Low: 85,
//     High: 135,
//     fullMark: 150
//   },
//   {
//     subject: "English",
//     Current: 95,
//     Mean: 102,
//     Low: 80,
//     High: 140,
//     fullMark: 150
//   },
//   {
//     subject: "Geography",
//     Current: 99,
//     Mean: 95,
//     Low: 70,
//     High: 120,
//     fullMark: 150
//   },
//   {
//     subject: "Physics",
//     Current: 85,
//     Mean: 90,
//     Low: 60,
//     High: 130,
//     fullMark: 150
//   },
//   {
//     subject: "History",
//     Current: 65,
//     Mean: 85,
//     Low: 55,
//     High: 125,
//     fullMark: 150
//   }
// ];

// export default function SpiderChart() {
//   return (
//     <RadarChart
//       cx={300}
//       cy={250}
//       outerRadius={150}
//       width={500}
//       height={500}
//       data={data}
//     >
//       <PolarGrid />
//       <PolarAngleAxis dataKey="subject" />
//       <PolarRadiusAxis angle={30} domain={[0, 150]} />

//       <Radar
//         name="Current"
//         dataKey="Current"
//         stroke="#6a5acd"
//         fill="#6a5acd"
//         fillOpacity={0.6}
//     />
//     <Radar
//         name="High"
//         dataKey="High"
//         stroke="#87CEFA"
//         fill="#87CEFA"
//         fillOpacity={0.6}
//     />
//     <Radar
//         name="Mean"
//         dataKey="Mean"
//         stroke="#66cdaa"
//         fill="#66cdaa"
//         fillOpacity={0.6}
//     />

//     <Radar
//         name="Low"
//         dataKey="Low"
//         stroke="#ff8c00"
//         fill="#ff8c00"
//         fillOpacity={0.6}
//     />

    
//       <Legend />
//     </RadarChart>
//   );
// }
import React from "react";
import {
  Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Legend
} from "recharts";

export default function SpiderChart({ newData }) {
  // Transform the incoming data to match the expected structure
  const transformedData = newData.map(item => ({
    subject: item.course_name,
    Current: parseFloat(item.marks),
    Mean: parseFloat(item.mean),
    Low: parseFloat(item.minimum),
    High: parseFloat(item.maximum),
    fullMark: 100 // Assuming 100 is the full mark, adjust as needed
  }));

  return (
    <RadarChart
      cx={300}
      cy={250}
      outerRadius={150}
      width={500}
      height={500}
      data={transformedData}
    >
      <PolarGrid />
      <PolarAngleAxis dataKey="subject" />
      <PolarRadiusAxis angle={30} domain={[0, 100]} /> {/* Adjust domain as needed */}

      <Radar
        name="Current"
        dataKey="Current"
        stroke="#6a5acd"
        fill="#6a5acd"
        fillOpacity={0.6}
      />
      <Radar
        name="High"
        dataKey="High"
        stroke="#87CEFA"
        fill="#87CEFA"
        fillOpacity={0.6}
      />
      <Radar
        name="Mean"
        dataKey="Mean"
        stroke="#66cdaa"
        fill="#66cdaa"
        fillOpacity={0.6}
      />
      <Radar
        name="Low"
        dataKey="Low"
        stroke="#ff8c00"
        fill="#ff8c00"
        fillOpacity={0.6}
      />

      <Legend />
    </RadarChart>
  );
}
