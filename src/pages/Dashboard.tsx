import { useUser } from '@clerk/clerk-react';
import { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

interface Resident {
  id: string;
  first_name: string;
  last_name: string;
  status: string;
  admission_date: string;
}

interface Donation {
  id: string;
  amount: number;
  currency: string;
  payment_status: string;
  created_at: string;
}

export default function Dashboard() {
  const { user } = useUser();
  const [residents, setResidents] = useState<Resident[]>([]);
  const [donations, setDonations] = useState<Donation[]>([]);

  useEffect(() => {
    if (user) {
      // Fetch residents
      const fetchResidents = async () => {
        const { data, error } = await supabase
          .from('residents')
          .select('*')
          .eq('user_id', user.id);
        
        if (!error && data) {
          setResidents(data);
        }
      };

      // Fetch donations
      const fetchDonations = async () => {
        const { data, error } = await supabase
          .from('donations')
          .select('*')
          .eq('user_id', user.id);
        
        if (!error && data) {
          setDonations(data);
        }
      };

      fetchResidents();
      fetchDonations();
    }
  }, [user]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Residents Section */}
        <Card>
          <CardHeader>
            <CardTitle>Residents</CardTitle>
            <CardDescription>Manage your resident applications and details</CardDescription>
          </CardHeader>
          <CardContent>
            {residents.length > 0 ? (
              <div className="space-y-4">
                {residents.map((resident) => (
                  <div key={resident.id} className="p-4 border rounded-lg">
                    <h3 className="font-semibold">
                      {resident.first_name} {resident.last_name}
                    </h3>
                    <p className="text-sm text-gray-500">
                      Status: <span className="capitalize">{resident.status}</span>
                    </p>
                    <p className="text-sm text-gray-500">
                      Admitted: {new Date(resident.admission_date).toLocaleDateString()}
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-4">
                <p className="text-gray-500 mb-4">No residents found</p>
                <Button asChild>
                  <Link to="/admission">Add Resident</Link>
                </Button>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Donations Section */}
        <Card>
          <CardHeader>
            <CardTitle>Donations</CardTitle>
            <CardDescription>View your donation history</CardDescription>
          </CardHeader>
          <CardContent>
            {donations.length > 0 ? (
              <div className="space-y-4">
                {donations.map((donation) => (
                  <div key={donation.id} className="p-4 border rounded-lg">
                    <h3 className="font-semibold">
                      {donation.amount} {donation.currency}
                    </h3>
                    <p className="text-sm text-gray-500">
                      Status: <span className="capitalize">{donation.payment_status}</span>
                    </p>
                    <p className="text-sm text-gray-500">
                      Date: {new Date(donation.created_at).toLocaleDateString()}
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-4">
                <p className="text-gray-500 mb-4">No donations found</p>
                <Button asChild>
                  <Link to="/donation">Make a Donation</Link>
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}