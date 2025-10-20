import React, { useState, useEffect } from 'react';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { db } from '@/firebase/config';
import { addTestContact, addTestContactWithCustomId } from '@/utils/firebaseTest';

export default function Admin() {
  const [submissions, setSubmissions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [testLoading, setTestLoading] = useState(false);
  const [customId, setCustomId] = useState('');

  const fetchSubmissions = async () => {
    try {
      const q = query(collection(db, "contacts"), orderBy("createdAt", "desc"));
      const querySnapshot = await getDocs(q);
      const submissionsList = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
        createdAt: doc.data().createdAt?.toDate().toLocaleString()
      }));
      setSubmissions(submissionsList);
    } catch (error) {
      console.error("Error fetching submissions:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSubmissions();
  }, []);

  const handleAddTest = async () => {
    setTestLoading(true);
    try {
      await addTestContact();
      await fetchSubmissions();
    } catch (error) {
      console.error("Error adding test contact:", error);
    } finally {
      setTestLoading(false);
    }
  };

  const handleAddCustomId = async () => {
    if (!customId.trim()) {
      alert("Please enter a custom ID");
      return;
    }
    setTestLoading(true);
    try {
      await addTestContactWithCustomId(customId);
      await fetchSubmissions();
      setCustomId('');
    } catch (error) {
      console.error("Error adding test contact with custom ID:", error);
    } finally {
      setTestLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#04081A] text-white p-8">
        <div className="container mx-auto">
          <h1 className="text-2xl font-bold mb-4">Loading submissions...</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#04081A] text-white p-8">
      <div className="container mx-auto">
        <div className="flex flex-col gap-4 mb-8">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Contact Form Submissions
          </h1>
          
          <div className="flex gap-4 items-center">
            <button
              onClick={handleAddTest}
              disabled={testLoading}
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors disabled:opacity-50"
            >
              {testLoading ? 'Adding Test...' : 'Add Test Document (Auto ID)'}
            </button>

            <div className="flex gap-2 items-center">
              <input
                type="text"
                value={customId}
                onChange={(e) => setCustomId(e.target.value)}
                placeholder="Enter custom ID"
                className="px-4 py-2 rounded-lg bg-white/5 border border-gray-700 focus:border-blue-500 focus:outline-none"
              />
              <button
                onClick={handleAddCustomId}
                disabled={testLoading || !customId.trim()}
                className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-lg transition-colors disabled:opacity-50"
              >
                {testLoading ? 'Adding...' : 'Add with Custom ID'}
              </button>
            </div>
          </div>
        </div>
        
        <div className="grid gap-6">
          {submissions.map((submission) => (
            <div 
              key={submission.id} 
              className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-gray-700/50"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h3 className="text-lg font-semibold text-blue-400">From: {submission.name}</h3>
                  <p className="text-gray-300">{submission.email}</p>
                  <p className="text-sm text-gray-500 mt-1">Document ID: {submission.id}</p>
                </div>
                <div className="text-right">
                  <p className="text-gray-400">{submission.createdAt}</p>
                </div>
              </div>
              
              <div className="mt-4">
                <h4 className="text-lg font-semibold text-purple-400">Subject: {submission.subject}</h4>
                <p className="mt-2 text-gray-300 whitespace-pre-wrap">{submission.message}</p>
              </div>
            </div>
          ))}

          {submissions.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-400 text-lg">No submissions yet</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 