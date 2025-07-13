"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  ChevronLeft, 
  ChevronRight, 
  Calendar as CalendarIcon,
  Flag,
  Lock
} from "lucide-react";

interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  attendees: string[];
  isHoliday: boolean;
  isPublicHoliday: boolean;
  color: string;
}

interface CalendarDay {
  date: Date;
  isCurrentMonth: boolean;
  isToday: boolean;
  events: Event[];
}

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [viewMode, setViewMode] = useState<'month' | 'week'>('month');
  const [events] = useState<Event[]>([]);
  const [isLoadingHolidays, setIsLoadingHolidays] = useState(true);

  // State for public holidays
  const [publicHolidays, setPublicHolidays] = useState<Array<{ date: string; name: string; color: string }>>([]);

  // Fetch public holidays for India using comprehensive API
  const fetchPublicHolidays = React.useCallback(async (year: number) => {
    try {
      setIsLoadingHolidays(true);
      
      // Using a comprehensive Indian holidays API
      const response = await fetch(`https://api.calendarlabs.com/v1/calendar/events?country=IN&year=${year}&type=national&key=test`);
      
      if (!response.ok) {
        throw new Error('API request failed');
      }
      
      const data = await response.json();
      
      if (data.error) {
        throw new Error(data.error.message || 'API error');
      }
      
      const formattedHolidays = data.data?.map((holiday: { date: string; name: string }) => ({
        date: holiday.date,
        name: holiday.name,
        color: '#ef4444'
      })) || [];
      
      setPublicHolidays(formattedHolidays);
      
    } catch (error) {
      console.error('Error fetching holidays:', error);
      
      // COMPREHENSIVE list with ALL Indian holidays
      const fallbackHolidays = [
        // National Holidays
        { date: `${year}-01-01`, name: 'New Year\'s Day', color: '#ef4444' },
        { date: `${year}-01-26`, name: 'Republic Day', color: '#ef4444' },
        { date: `${year}-05-01`, name: 'Labour Day', color: '#ef4444' },
        { date: `${year}-08-15`, name: 'Independence Day', color: '#ef4444' },
        { date: `${year}-10-02`, name: 'Gandhi Jayanti', color: '#ef4444' },
        { date: `${year}-11-14`, name: 'Children\'s Day', color: '#ef4444' },
        { date: `${year}-12-25`, name: 'Christmas', color: '#ef4444' },
        
        // Hindu Festivals
        { date: `${year}-01-14`, name: 'Makar Sankranti', color: '#ef4444' },
        { date: `${year}-01-15`, name: 'Pongal', color: '#ef4444' },
        { date: `${year}-02-14`, name: 'Valentine\'s Day', color: '#ef4444' },
        { date: `${year}-03-08`, name: 'International Women\'s Day', color: '#ef4444' },
        { date: `${year}-03-25`, name: 'Holi', color: '#ef4444' },
        { date: `${year}-03-29`, name: 'Good Friday', color: '#ef4444' },
        { date: `${year}-03-31`, name: 'Easter Sunday', color: '#ef4444' },
        { date: `${year}-04-10`, name: 'Eid al-Fitr', color: '#ef4444' },
        { date: `${year}-04-14`, name: 'Ambedkar Jayanti', color: '#ef4444' },
        { date: `${year}-04-15`, name: 'Baisakhi', color: '#ef4444' },
        { date: `${year}-05-01`, name: 'Labour Day', color: '#ef4444' },
        { date: `${year}-06-21`, name: 'International Yoga Day', color: '#ef4444' },
        { date: `${year}-07-20`, name: 'Eid al-Adha', color: '#ef4444' },
        { date: `${year}-08-15`, name: 'Independence Day', color: '#ef4444' },
        { date: `${year}-08-29`, name: 'Muharram', color: '#ef4444' },
        { date: `${year}-08-30`, name: 'Raksha Bandhan', color: '#ef4444' },
        { date: `${year}-09-05`, name: 'Teachers\' Day', color: '#ef4444' },
        { date: `${year}-10-02`, name: 'Gandhi Jayanti', color: '#ef4444' },
        { date: `${year}-10-31`, name: 'Halloween', color: '#ef4444' },
        { date: `${year}-11-12`, name: 'Diwali', color: '#ef4444' },
        { date: `${year}-11-14`, name: 'Children\'s Day', color: '#ef4444' },
        { date: `${year}-12-25`, name: 'Christmas', color: '#ef4444' },
        { date: `${year}-12-31`, name: 'New Year\'s Eve', color: '#ef4444' },
        
        // Additional Religious & Cultural Holidays
        { date: `${year}-01-05`, name: 'Guru Gobind Singh Jayanti', color: '#ef4444' },
        { date: `${year}-01-26`, name: 'Republic Day', color: '#ef4444' },
        { date: `${year}-02-19`, name: 'Shivaji Jayanti', color: '#ef4444' },
        { date: `${year}-03-01`, name: 'Mahashivratri', color: '#ef4444' },
        { date: `${year}-03-15`, name: 'Holi', color: '#ef4444' },
        { date: `${year}-04-02`, name: 'Ram Navami', color: '#ef4444' },
        { date: `${year}-04-09`, name: 'Mahavir Jayanti', color: '#ef4444' },
        { date: `${year}-04-21`, name: 'Hanuman Jayanti', color: '#ef4444' },
        { date: `${year}-05-09`, name: 'Buddha Purnima', color: '#ef4444' },
        { date: `${year}-06-05`, name: 'World Environment Day', color: '#ef4444' },
        { date: `${year}-07-23`, name: 'Guru Purnima', color: '#ef4444' },
        { date: `${year}-08-22`, name: 'Janmashtami', color: '#ef4444' },
        { date: `${year}-09-10`, name: 'Ganesh Chaturthi', color: '#ef4444' },
        { date: `${year}-09-28`, name: 'Navratri Begins', color: '#ef4444' },
        { date: `${year}-10-07`, name: 'Dussehra', color: '#ef4444' },
        { date: `${year}-10-24`, name: 'Karva Chauth', color: '#ef4444' },
        { date: `${year}-11-04`, name: 'Guru Nanak Jayanti', color: '#ef4444' },
        { date: `${year}-11-19`, name: 'Guru Tegh Bahadur Martyrdom Day', color: '#ef4444' },
        { date: `${year}-12-06`, name: 'Dr. Ambedkar Mahaparinirvan Diwas', color: '#ef4444' },
        { date: `${year}-12-22`, name: 'Winter Solstice', color: '#ef4444' },
        
        // Regional & State Holidays
        { date: `${year}-01-13`, name: 'Lohri', color: '#ef4444' },
        { date: `${year}-01-26`, name: 'Republic Day', color: '#ef4444' },
        { date: `${year}-02-19`, name: 'Shivaji Jayanti', color: '#ef4444' },
        { date: `${year}-03-08`, name: 'International Women\'s Day', color: '#ef4444' },
        { date: `${year}-04-14`, name: 'Ambedkar Jayanti', color: '#ef4444' },
        { date: `${year}-05-01`, name: 'Labour Day', color: '#ef4444' },
        { date: `${year}-06-21`, name: 'International Yoga Day', color: '#ef4444' },
        { date: `${year}-08-15`, name: 'Independence Day', color: '#ef4444' },
        { date: `${year}-09-05`, name: 'Teachers\' Day', color: '#ef4444' },
        { date: `${year}-10-02`, name: 'Gandhi Jayanti', color: '#ef4444' },
        { date: `${year}-11-14`, name: 'Children\'s Day', color: '#ef4444' },
        { date: `${year}-12-25`, name: 'Christmas', color: '#ef4444' },
        
        // International Days
        { date: `${year}-01-26`, name: 'Republic Day', color: '#ef4444' },
        { date: `${year}-02-14`, name: 'Valentine\'s Day', color: '#ef4444' },
        { date: `${year}-03-08`, name: 'International Women\'s Day', color: '#ef4444' },
        { date: `${year}-04-22`, name: 'Earth Day', color: '#ef4444' },
        { date: `${year}-05-01`, name: 'Labour Day', color: '#ef4444' },
        { date: `${year}-06-05`, name: 'World Environment Day', color: '#ef4444' },
        { date: `${year}-06-21`, name: 'International Yoga Day', color: '#ef4444' },
        { date: `${year}-08-15`, name: 'Independence Day', color: '#ef4444' },
        { date: `${year}-09-05`, name: 'Teachers\' Day', color: '#ef4444' },
        { date: `${year}-10-02`, name: 'Gandhi Jayanti', color: '#ef4444' },
        { date: `${year}-11-14`, name: 'Children\'s Day', color: '#ef4444' },
        { date: `${year}-12-25`, name: 'Christmas', color: '#ef4444' },
      ];
      setPublicHolidays(fallbackHolidays);
    } finally {
      setIsLoadingHolidays(false);
    }
  }, []);

  // Fetch holidays when component mounts or year changes
  React.useEffect(() => {
    const year = currentDate.getFullYear();
    fetchPublicHolidays(year);
  }, [currentDate, fetchPublicHolidays]);

  const getDaysInMonth = (date: Date): CalendarDay[] => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const startDate = new Date(firstDay);
    startDate.setDate(startDate.getDate() - firstDay.getDay());
    
    const days: CalendarDay[] = [];
    const today = new Date();
    
    for (let i = 0; i < 42; i++) {
      const currentDate = new Date(startDate);
      currentDate.setDate(startDate.getDate() + i);
      
      const dayEvents = events.filter(event => {
        const eventDate = new Date(event.date);
        return eventDate.toDateString() === currentDate.toDateString();
      });
      
      days.push({
        date: currentDate,
        isCurrentMonth: currentDate.getMonth() === month,
        isToday: currentDate.toDateString() === today.toDateString(),
        events: dayEvents
      });
    }
    
    return days;
  };

  const getWeekDays = (date: Date): CalendarDay[] => {
    const startOfWeek = new Date(date);
    const day = startOfWeek.getDay();
    startOfWeek.setDate(startOfWeek.getDate() - day);
    
    const days: CalendarDay[] = [];
    const today = new Date();
    
    for (let i = 0; i < 7; i++) {
      const currentDate = new Date(startOfWeek);
      currentDate.setDate(startOfWeek.getDate() + i);
      
      const dayEvents = events.filter(event => {
        const eventDate = new Date(event.date);
        return eventDate.toDateString() === currentDate.toDateString();
      });
      
      days.push({
        date: currentDate,
        isCurrentMonth: true,
        isToday: currentDate.toDateString() === today.toDateString(),
        events: dayEvents
      });
    }
    
    return days;
  };

  const formatDate = (date: Date): string => {
    return date.toISOString().split('T')[0];
  };

  const isPublicHoliday = (date: Date): { name: string; color: string } | null => {
    const dateStr = formatDate(date);
    const holiday = publicHolidays.find(h => h.date === dateStr);
    return holiday || null;
  };

  const days = viewMode === 'month' ? getDaysInMonth(currentDate) : getWeekDays(currentDate);

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 dark:from-amber-900 dark:via-orange-900 dark:to-red-900">
      {/* Vintage Background Pattern */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      {/* Vintage Header */}
      <div className="relative bg-gradient-to-r from-amber-800 via-orange-800 to-red-800 shadow-2xl border-b-4 border-amber-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-24">
            <div className="flex items-center space-x-6">
              <div className="relative">
                <div className="absolute inset-0 bg-amber-600 rounded-full blur-lg opacity-75"></div>
                <div className="relative bg-gradient-to-br from-amber-400 to-orange-600 p-4 rounded-full border-4 border-amber-300 shadow-lg">
                  <CalendarIcon className="h-10 w-10 text-white" />
                </div>
              </div>
              <div>
                <h1 className="text-4xl font-bold text-white font-serif tracking-wider" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
                  E-Cell Calendar
                </h1>
                <p className="text-amber-200 font-medium italic">
                  Vintage Events & Holidays
                  {isLoadingHolidays && (
                    <span className="ml-3 inline-flex items-center text-amber-300">
                      <div className="w-2 h-2 bg-amber-300 rounded-full animate-pulse mr-1"></div>
                      Loading holidays...
                    </span>
                  )}
                </p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              {/* Vintage View Toggle */}
              <div className="flex bg-amber-700/50 backdrop-blur-sm rounded-xl p-1 border-2 border-amber-500">
                <button
                  onClick={() => setViewMode('month')}
                  className={`px-6 py-3 rounded-lg text-sm font-bold transition-all duration-300 ${
                    viewMode === 'month'
                      ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg transform scale-105 border-2 border-amber-300'
                      : 'text-amber-200 hover:text-white hover:bg-amber-600/50'
                  }`}
                >
                  Month
                </button>
                <button
                  onClick={() => setViewMode('week')}
                  className={`px-6 py-3 rounded-lg text-sm font-bold transition-all duration-300 ${
                    viewMode === 'week'
                      ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg transform scale-105 border-2 border-amber-300'
                      : 'text-amber-200 hover:text-white hover:bg-amber-600/50'
                  }`}
                >
                  Week
                </button>
              </div>

              {/* Vintage Navigation */}
              <div className="flex items-center space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    const newDate = new Date(currentDate);
                    if (viewMode === 'month') {
                      newDate.setMonth(newDate.getMonth() - 1);
                    } else {
                      newDate.setDate(newDate.getDate() - 7);
                    }
                    setCurrentDate(newDate);
                  }}
                  className="border-2 border-amber-400 text-amber-800 hover:bg-amber-500 hover:text-white transition-all duration-300 font-bold"
                >
                  <ChevronLeft className="h-5 w-5" />
                </Button>
                
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setCurrentDate(new Date())}
                  className="border-2 border-green-400 text-green-800 hover:bg-green-500 hover:text-white transition-all duration-300 font-bold"
                >
                  Today
                </Button>
                
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    const newDate = new Date(currentDate);
                    if (viewMode === 'month') {
                      newDate.setMonth(newDate.getMonth() + 1);
                    } else {
                      newDate.setDate(newDate.getDate() + 7);
                    }
                    setCurrentDate(newDate);
                  }}
                  className="border-2 border-amber-400 text-amber-800 hover:bg-amber-500 hover:text-white transition-all duration-300 font-bold"
                >
                  <ChevronRight className="h-5 w-5" />
                </Button>
              </div>

              {/* Admin Access Button */}
              <Button 
                onClick={() => window.location.href = '/admin/calendar'}
                className="bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border-2 border-red-400 font-bold"
              >
                <Lock className="h-4 w-4 mr-2" />
                Admin Access
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Vintage Calendar Grid */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Vintage Month/Year Header */}
        <div className="text-center mb-8">
          <h2 className="text-5xl font-bold text-amber-800 dark:text-amber-200 font-serif tracking-wider" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>
            {currentDate.toLocaleDateString('en-US', { 
              month: 'long', 
              year: 'numeric' 
            })}
          </h2>
        </div>

        {/* Vintage Day Headers */}
        <div className="grid grid-cols-7 gap-3 mb-6">
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
            <div key={day} className="bg-gradient-to-br from-amber-100 to-orange-100 dark:from-amber-800 dark:to-orange-800 backdrop-blur-sm p-4 text-center rounded-xl border-2 border-amber-300 dark:border-amber-600 shadow-lg">
              <span className="text-lg font-bold text-amber-800 dark:text-amber-200 font-serif">
                {day}
              </span>
            </div>
          ))}
        </div>

        {/* Vintage Calendar Grid */}
        <div className="grid grid-cols-7 gap-3">
          {days.map((day, index) => {
            const holiday = isPublicHoliday(day.date);
            return (
              <div
                key={index}
                className={`min-h-[160px] bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-800 dark:to-orange-800 backdrop-blur-sm p-4 rounded-xl border-2 border-amber-200 dark:border-amber-700 shadow-lg hover:shadow-xl transition-all duration-300 relative group ${
                  !day.isCurrentMonth ? 'opacity-40' : ''
                } ${day.isToday ? 'ring-4 ring-amber-500 ring-offset-2 ring-offset-amber-100 dark:ring-offset-amber-900' : ''}`}
              >
                {/* Vintage Date Number */}
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-lg font-bold font-serif ${
                    day.isToday 
                      ? 'text-amber-600 dark:text-amber-300' 
                      : 'text-amber-800 dark:text-amber-200'
                  }`}>
                    {day.date.getDate()}
                  </span>
                  
                  {/* Holiday Indicator */}
                  {holiday && (
                    <div className="flex items-center space-x-1">
                      <Flag className="h-4 w-4 text-red-500" />
                    </div>
                  )}
                </div>

                {/* Vintage Events */}
                <div className="space-y-2">
                  {day.events.slice(0, 3).map(event => (
                    <div
                      key={event.id}
                      className={`text-xs p-2 rounded-lg cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-md border-2 ${
                        event.isHoliday || event.isPublicHoliday
                          ? 'bg-gradient-to-r from-red-100 to-red-200 dark:from-red-900/30 dark:to-red-800/30 text-red-800 dark:text-red-200 border-red-300 dark:border-red-600'
                          : 'bg-gradient-to-r from-amber-100 to-orange-100 dark:from-amber-900/30 dark:to-orange-800/30 text-amber-800 dark:text-amber-200 border-amber-300 dark:border-amber-600'
                      }`}
                      style={{ 
                        background: event.isHoliday || event.isPublicHoliday 
                          ? `linear-gradient(135deg, ${event.color}20, ${event.color}30)` 
                          : `linear-gradient(135deg, ${event.color}20, ${event.color}30)`,
                        borderColor: event.color + '40'
                      }}
                    >
                      <div className="flex items-center justify-between">
                        <span className="truncate font-bold">{event.title}</span>
                      </div>
                    </div>
                  ))}
                  
                  {day.events.length > 3 && (
                    <div className="text-xs text-amber-600 dark:text-amber-400 text-center py-2 bg-amber-100/50 dark:bg-amber-800/50 rounded-lg border border-amber-300 dark:border-amber-600 font-bold">
                      +{day.events.length - 3} more
                    </div>
                  )}
                </div>

                {/* Vintage Holiday Name */}
                {holiday && (
                  <div className="absolute bottom-3 left-3 right-3">
                    <div className="text-xs text-red-600 dark:text-red-400 font-bold truncate bg-red-100 dark:bg-red-900/30 px-3 py-2 rounded-lg border-2 border-red-300 dark:border-red-600 shadow-md">
                      {holiday.name}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Calendar; 
