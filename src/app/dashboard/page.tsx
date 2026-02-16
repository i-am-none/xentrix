"use client";

import DashboardLayout from "@/components/dashboard/DashboardLayout";
import UserHeader from "@/components/dashboard/UserHeader";
import ActivityTimeline from "@/components/dashboard/ActivityTimeline";
import PassesPanel from "@/components/dashboard/PassesPanel";
import ProgressPanel from "@/components/dashboard/ProgressPanel";

export default function DashboardPage() {
  return (
    <DashboardLayout>
       
       <UserHeader />

       <div className="p-6 md:p-10 grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Left Column (Main Stats) */}
          <div className="md:col-span-8 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="h-full">
                    <PassesPanel />
                  </div>
                  <div className="h-full">
                     <ProgressPanel />
                  </div>
              </div>
              
              {/* Recommendations Placeholder */}
              <div className="bg-zinc-900/30 border border-white/5 rounded-2xl p-6">
                 <h3 className="text-white font-bold uppercase tracking-wider mb-4">Recommended for You</h3>
                 <div className="flex gap-4 overflow-x-auto pb-2">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="min-w-[200px] aspect-video bg-zinc-800 rounded-lg flex items-center justify-center text-zinc-600 font-bold border border-white/5">
                            Event Card 0{i}
                        </div>
                    ))}
                 </div>
              </div>
          </div>

          {/* Right Column (Timeline) */}
          <div className="md:col-span-4 h-full">
             <ActivityTimeline />
          </div>

       </div>

    </DashboardLayout>
  );
}
