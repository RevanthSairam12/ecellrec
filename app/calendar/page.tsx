"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { 
  ChevronLeft, 
  ChevronRight, 
  Plus, 
  Edit, 
  Trash2, 
  Calendar as CalendarIcon,
  Flag,
  X,
  Check
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
  const [events, setEvents] = useState<Event[]>([]);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAdmin] = useState(true);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    date: '',
    time: '',
    location: '',
    attendees: '',
    isHoliday: false,
    isPublicHoliday: false,
    color: '#3b82f6'
  });

  // State for public holidays
  const [publicHolidays, setPublicHolidays] = useState<Array<{ date: string; name: string; color: string }>>([]);
  const [isLoadingHolidays, setIsLoadingHolidays] = useState(true);

  // Fetch public holidays for India
  const fetchPublicHolidays = async (year: number) => {
    try {
      setIsLoadingHolidays(true);
      // Using a free public holidays API
      const response = await fetch(`https://date.nager.at/api/v3/PublicHolidays/${year}/IN`);
      const holidays = await response.json();
      
      const formattedHolidays = holidays.map((holiday: { date: string; localName: string }) => ({
        date: holiday.date,
        name: holiday.localName,
        color: '#ef4444'
      }));
      
      setPublicHolidays(formattedHolidays);
    } catch (error) {
      console.error('Error fetching holidays:', error);
      // Fallback to basic Indian holidays if API fails
      const fallbackHolidays = [
        { date: `${year}-01-26`, name: 'Republic Day', color: '#ef4444' },
        { date: `${year}-08-15`, name: 'Independence Day', color: '#ef4444' },
        { date: `${year}-10-02`, name: 'Gandhi Jayanti', color: '#ef4444' },
        { date: `${year}-12-25`, name: 'Christmas', color: '#ef4444' },
      ];
      setPublicHolidays(fallbackHolidays);
    } finally {
      setIsLoadingHolidays(false);
    }
  };

  // Fetch holidays when component mounts or year changes
  React.useEffect(() => {
    const year = currentDate.getFullYear();
    fetchPublicHolidays(year);
  }, [currentDate]);

  const colors = [
    { hex: '#3b82f6', name: 'Blue' },
    { hex: '#10b981', name: 'Green' },
    { hex: '#f59e0b', name: 'Amber' },
    { hex: '#ef4444', name: 'Red' },
    { hex: '#8b5cf6', name: 'Purple' },
    { hex: '#06b6d4', name: 'Cyan' },
    { hex: '#f97316', name: 'Orange' },
    { hex: '#ec4899', name: 'Pink' }
  ];

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

  const handleAddEvent = () => {
    setSelectedEvent(null);
    setFormData({
      title: '',
      description: '',
      date: formatDate(currentDate),
      time: '',
      location: '',
      attendees: '',
      isHoliday: false,
      isPublicHoliday: false,
      color: '#3b82f6'
    });
    setIsModalOpen(true);
  };

  const handleEditEvent = (event: Event) => {
    setSelectedEvent(event);
    setFormData({
      title: event.title,
      description: event.description,
      date: event.date,
      time: event.time,
      location: event.location,
      attendees: event.attendees.join(', '),
      isHoliday: event.isHoliday,
      isPublicHoliday: event.isPublicHoliday,
      color: event.color
    });
    setIsModalOpen(true);
  };

  const handleSaveEvent = () => {
    const newEvent: Event = {
      id: selectedEvent?.id || Date.now().toString(),
      title: formData.title,
      description: formData.description,
      date: formData.date,
      time: formData.time,
      location: formData.location,
      attendees: formData.attendees.split(',').map(a => a.trim()).filter(a => a),
      isHoliday: formData.isHoliday,
      isPublicHoliday: formData.isPublicHoliday,
      color: formData.color
    };

    if (selectedEvent) {
      setEvents(events.map(e => e.id === selectedEvent.id ? newEvent : e));
    } else {
      setEvents([...events, newEvent]);
    }

    setIsModalOpen(false);
  };

  const handleDeleteEvent = (eventId: string) => {
    setEvents(events.filter(e => e.id !== eventId));
    setIsModalOpen(false);
  };

  const isPublicHoliday = (date: Date): { name: string; color: string } | null => {
    const dateStr = formatDate(date);
    const holiday = publicHolidays.find(h => h.date === dateStr);
    return holiday || null;
  };

  const days = viewMode === 'month' ? getDaysInMonth(currentDate) : getWeekDays(currentDate);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-green-400/20 to-blue-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Header */}
      <div className="relative bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl shadow-lg border-b border-white/20 dark:border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl blur opacity-75"></div>
                <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-xl">
                  <CalendarIcon className="h-8 w-8 text-white" />
                </div>
              </div>
                              <div>
                  <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                    E-Cell Calendar
                  </h1>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Manage events and stay organized
                    {isLoadingHolidays && (
                      <span className="ml-2 inline-flex items-center text-blue-600 dark:text-blue-400">
                        <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full animate-pulse mr-1"></div>
                        Loading holidays...
                      </span>
                    )}
                  </p>
                </div>
            </div>
            
            <div className="flex items-center space-x-4">
              {/* View Toggle */}
              <div className="flex bg-slate-100/80 dark:bg-slate-700/80 backdrop-blur-sm rounded-xl p-1 border border-white/20 dark:border-slate-600/50">
                <button
                  onClick={() => setViewMode('month')}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    viewMode === 'month'
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg transform scale-105'
                      : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-white/50 dark:hover:bg-slate-600/50'
                  }`}
                >
                  Month
                </button>
                <button
                  onClick={() => setViewMode('week')}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    viewMode === 'week'
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg transform scale-105'
                      : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-white/50 dark:hover:bg-slate-600/50'
                  }`}
                >
                  Week
                </button>
              </div>

              {/* Navigation */}
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
                  className="hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:text-white transition-all duration-300"
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setCurrentDate(new Date())}
                  className="hover:bg-gradient-to-r hover:from-green-600 hover:to-blue-600 hover:text-white transition-all duration-300"
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
                  className="hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:text-white transition-all duration-300"
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>

              {/* Add Event Button */}
              {isAdmin && (
                <Button 
                  onClick={handleAddEvent} 
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Add Event
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Calendar Grid */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Month/Year Header */}
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-purple-900 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent">
            {currentDate.toLocaleDateString('en-US', { 
              month: 'long', 
              year: 'numeric' 
            })}
          </h2>
        </div>

        {/* Day Headers */}
        <div className="grid grid-cols-7 gap-2 mb-4">
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
            <div key={day} className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm p-4 text-center rounded-xl border border-white/20 dark:border-slate-700/50 shadow-sm">
              <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                {day}
              </span>
            </div>
          ))}
        </div>

        {/* Calendar Grid */}
        <div className="grid grid-cols-7 gap-2">
          {days.map((day, index) => {
            const holiday = isPublicHoliday(day.date);
            return (
              <div
                key={index}
                className={`min-h-[140px] bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm p-3 rounded-xl border border-white/20 dark:border-slate-700/50 shadow-sm hover:shadow-lg transition-all duration-300 relative group ${
                  !day.isCurrentMonth ? 'opacity-40' : ''
                } ${day.isToday ? 'ring-2 ring-blue-500 ring-offset-2 ring-offset-white dark:ring-offset-slate-800' : ''}`}
              >
                {/* Date Number */}
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-sm font-bold ${
                    day.isToday 
                      ? 'text-blue-600 dark:text-blue-400' 
                      : 'text-slate-900 dark:text-white'
                  }`}>
                    {day.date.getDate()}
                  </span>
                  
                  {/* Holiday Indicator */}
                  {holiday && (
                    <div className="flex items-center space-x-1">
                      <Flag className="h-3 w-3 text-red-500" />
                      {isLoadingHolidays && (
                        <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                      )}
                    </div>
                  )}
                </div>

                {/* Events */}
                <div className="space-y-1">
                  {day.events.slice(0, 3).map(event => (
                    <div
                      key={event.id}
                      className={`text-xs p-2 rounded-lg cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-md ${
                        event.isHoliday || event.isPublicHoliday
                          ? 'bg-gradient-to-r from-red-100 to-red-200 dark:from-red-900/30 dark:to-red-800/30 text-red-800 dark:text-red-200 border border-red-200 dark:border-red-700/50'
                          : 'bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-800/30 text-blue-800 dark:text-blue-200 border border-blue-200 dark:border-blue-700/50'
                      }`}
                      style={{ 
                        background: event.isHoliday || event.isPublicHoliday 
                          ? `linear-gradient(135deg, ${event.color}20, ${event.color}30)` 
                          : `linear-gradient(135deg, ${event.color}20, ${event.color}30)`,
                        borderColor: event.color + '40'
                      }}
                      onClick={() => handleEditEvent(event)}
                    >
                      <div className="flex items-center justify-between">
                        <span className="truncate font-medium">{event.title}</span>
                        {isAdmin && (
                          <Edit className="h-2 w-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        )}
                      </div>
                    </div>
                  ))}
                  
                  {day.events.length > 3 && (
                    <div className="text-xs text-slate-500 dark:text-slate-400 text-center py-1 bg-slate-100/50 dark:bg-slate-700/50 rounded-lg">
                      +{day.events.length - 3} more
                    </div>
                  )}
                </div>

                {/* Holiday Name */}
                {holiday && (
                  <div className="absolute bottom-2 left-2 right-2">
                    <div className="text-xs text-red-600 dark:text-red-400 font-medium truncate bg-red-50 dark:bg-red-900/30 px-2 py-1 rounded-lg border border-red-200 dark:border-red-700/50">
                      {holiday.name}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Event Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto border border-white/20 dark:border-slate-700/50">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {selectedEvent ? 'Edit Event' : 'Add Event'}
                </h3>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsModalOpen(false)}
                  className="hover:bg-red-100 dark:hover:bg-red-900/30 text-red-600 dark:text-red-400"
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>

              <div className="space-y-4">
                <div>
                  <Label htmlFor="title" className="text-sm font-medium text-slate-700 dark:text-slate-300">Event Title</Label>
                  <Input
                    id="title"
                    value={formData.title}
                    onChange={(e) => setFormData({...formData, title: e.target.value})}
                    placeholder="Enter event title"
                    className="mt-1 border-slate-200 dark:border-slate-600 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-blue-500 dark:focus:ring-blue-400"
                  />
                </div>

                <div>
                  <Label htmlFor="description" className="text-sm font-medium text-slate-700 dark:text-slate-300">Description</Label>
                  <Textarea
                    id="description"
                    value={formData.description}
                    onChange={(e) => setFormData({...formData, description: e.target.value})}
                    placeholder="Enter event description"
                    rows={3}
                    className="mt-1 border-slate-200 dark:border-slate-600 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-blue-500 dark:focus:ring-blue-400"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="date" className="text-sm font-medium text-slate-700 dark:text-slate-300">Date</Label>
                    <Input
                      id="date"
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({...formData, date: e.target.value})}
                      className="mt-1 border-slate-200 dark:border-slate-600 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-blue-500 dark:focus:ring-blue-400"
                    />
                  </div>
                  <div>
                    <Label htmlFor="time" className="text-sm font-medium text-slate-700 dark:text-slate-300">Time</Label>
                    <Input
                      id="time"
                      type="time"
                      value={formData.time}
                      onChange={(e) => setFormData({...formData, time: e.target.value})}
                      className="mt-1 border-slate-200 dark:border-slate-600 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-blue-500 dark:focus:ring-blue-400"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="location" className="text-sm font-medium text-slate-700 dark:text-slate-300">Location</Label>
                  <Input
                    id="location"
                    value={formData.location}
                    onChange={(e) => setFormData({...formData, location: e.target.value})}
                    placeholder="Enter location"
                    className="mt-1 border-slate-200 dark:border-slate-600 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-blue-500 dark:focus:ring-blue-400"
                  />
                </div>

                <div>
                  <Label htmlFor="attendees" className="text-sm font-medium text-slate-700 dark:text-slate-300">Attendees (comma-separated)</Label>
                  <Input
                    id="attendees"
                    value={formData.attendees}
                    onChange={(e) => setFormData({...formData, attendees: e.target.value})}
                    placeholder="Enter attendees"
                    className="mt-1 border-slate-200 dark:border-slate-600 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-blue-500 dark:focus:ring-blue-400"
                  />
                </div>

                <div>
                  <Label className="text-sm font-medium text-slate-700 dark:text-slate-300">Event Color</Label>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {colors.map(color => (
                      <button
                        key={color.hex}
                        className={`w-8 h-8 rounded-full border-2 transition-all duration-300 hover:scale-110 ${
                          formData.color === color.hex 
                            ? 'border-slate-900 dark:border-white shadow-lg' 
                            : 'border-slate-300 dark:border-slate-600 hover:border-slate-400 dark:hover:border-slate-500'
                        }`}
                        style={{ backgroundColor: color.hex }}
                        onClick={() => setFormData({...formData, color: color.hex})}
                        title={color.name}
                      />
                    ))}
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={formData.isHoliday}
                      onChange={(e) => setFormData({...formData, isHoliday: e.target.checked})}
                      className="rounded border-slate-300 dark:border-slate-600 text-blue-600 focus:ring-blue-500 dark:focus:ring-blue-400"
                    />
                    <span className="text-sm text-slate-700 dark:text-slate-300">Holiday</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={formData.isPublicHoliday}
                      onChange={(e) => setFormData({...formData, isPublicHoliday: e.target.checked})}
                      className="rounded border-slate-300 dark:border-slate-600 text-blue-600 focus:ring-blue-500 dark:focus:ring-blue-400"
                    />
                    <span className="text-sm text-slate-700 dark:text-slate-300">Public Holiday</span>
                  </label>
                </div>
              </div>

              <div className="flex items-center justify-between mt-6 pt-6 border-t border-slate-200 dark:border-slate-700">
                <div className="flex space-x-2">
                  <Button
                    onClick={handleSaveEvent}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                  >
                    <Check className="h-4 w-4 mr-2" />
                    {selectedEvent ? 'Update Event' : 'Add Event'}
                  </Button>
                  {selectedEvent && (
                    <Button
                      variant="destructive"
                      onClick={() => handleDeleteEvent(selectedEvent.id)}
                      className="hover:bg-red-700 transform hover:scale-105 transition-all duration-300"
                    >
                      <Trash2 className="h-4 w-4 mr-2" />
                      Delete
                    </Button>
                  )}
                </div>
                <Button
                  variant="outline"
                  onClick={() => setIsModalOpen(false)}
                  className="border-slate-200 dark:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700"
                >
                  Cancel
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Calendar; 
