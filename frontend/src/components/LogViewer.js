import React, { useEffect, useState } from 'react';

const LogViewer = ({ spiderName }) => {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    const socket = new WebSocket(`ws://localhost:8000/ws/logs/${spiderName}`);
    
    socket.onopen = () => {
      console.log('✅ WebSocket connection opened');
    };
    
    socket.onmessage = (event) => {
      console.log('📨 Raw message from server:', event.data); // Add this!
      
      try {
        const data = JSON.parse(event.data);
        console.log('Parsed data:', data); // Check structure!
  
        if (data.data && data.data.result.length > 0) {
          const logEntries = data.data.result.flatMap(entry => 
            entry.values.map(log => log[1])
          );
          console.log('Extracted logs:', logEntries); // Verify this!
          setLogs(prevLogs => [...prevLogs, ...logEntries]);
        } else {
          console.log('No logs in this message');
        }
      } catch (err) {
        console.error('❌ JSON parse error:', err);
      }
    };
  
    socket.onerror = (error) => {
      console.error('❌ WebSocket error:', error);
    };
    
    socket.onclose = () => {
      console.log('❎ WebSocket closed');
    };
  
    // Cleanup function when the component unmounts or spiderName changes
    return () => {
      socket.close();
    };
  }, [spiderName]);

  return (
    <div>
      <h2>Logs for {spiderName}</h2>
      <pre style={{
        backgroundColor: '#000',
        color: '#0f0',
        padding: '10px',
        height: '400px',
        overflowY: 'scroll'
      }}>
        {logs.join('\n')}
      </pre>
    </div>
  );
};

export default LogViewer;
