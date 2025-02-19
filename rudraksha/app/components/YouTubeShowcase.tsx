"use client";

import { motion } from "framer-motion";

const videos = [
  { id: "iiVe2icu6bA", title: "Identify Original Rudraksha" },
  { id: "yCSc47GoiDk", title: "Birth of Rudraksha" },
  
  { id: "7b5Ris4Z86Y", title: "108 year Sadanand Guruji" }
];

export default function YouTubeShowcase() {
  return (
    <div className="py-16 px-4 md:px-16 text-white ">
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
        Featured Videos
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {videos.map((video, index) => (
          <motion.div
            key={video.id}
            className="bg-gray-800 p-4 rounded-lg shadow-lg hover:scale-105 transition-transform"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-md">
              <iframe
                className="w-full h-48 md:h-64 rounded-lg"
                src={`https://www.youtube.com/embed/${video.id}`}
                title={video.title}
                allowFullScreen
              ></iframe>
            </div>
            <h3 className="mt-4 text-lg font-semibold text-amber-400 text-center">
              {video.title}
            </h3>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
