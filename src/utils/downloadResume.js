export const downloadResume = () => {
  // Replace this URL with your actual resume file URL
  const resumeUrl = '/Athul_V_Data_Scientist.pdf'; // Make sure to put your resume in the public folder
  
  // Create a temporary link element
  const link = document.createElement('a');
  link.href = resumeUrl;
  link.download = 'Athul_V_Data_Scientist.pdf'; // The name that will be used when downloading
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}; 