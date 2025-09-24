import MapContainer from '@/components/MapContainer';
import ChatSidebar from '@/components/ChatSidebar';

const Index = () => {
  return (
    <div className="flex h-screen bg-background">
      <MapContainer />
      <ChatSidebar />
    </div>
  );
};

export default Index;
