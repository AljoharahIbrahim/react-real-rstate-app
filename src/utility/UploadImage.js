export const uploadImageToCloudinary = async (file) => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", "nwvm1dt9"); 
  formData.append("folder", "estate-react"); 

  try {
    const response = await fetch(
      `https://api.cloudinary.com/v1_1/dkqssm5hg/image/upload`,
      {
        method: "POST",
        body: formData,
      }
    );

    if (!response.ok) {
      throw new Error("Failed to upload image");
    }

    const data = await response.json();
    return data.secure_url; // Return the secure URL of the uploaded image
  } catch (error) {
    console.error("Error uploading image to Cloudinary:", error);
    throw error;
  }
};

export const extractPublicIdFromUrl = (url) => {
  const regex = /\/v\d+\/(.+?)\.(jpg|jpeg|png|gif|webp|bmp|tiff)$/; // Adjust extensions as needed
  const match = url.match(regex);
  
  if (match && match[1]) {
    return match[1]; // This is the public_id
  } else {
    throw new Error("Invalid Cloudinary URL");
  }
};

// // Example usage
// const imageUrl =
//   "https://res.cloudinary.com/dkqssm5hg/image/upload/v1234567890/your_public_id.jpg";
// const publicId = extractPublicIdFromUrl(imageUrl);
// console.log("Public ID:", publicId); // Output: your_public_id
