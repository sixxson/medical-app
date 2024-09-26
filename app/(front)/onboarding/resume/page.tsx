import { getUserById } from "@/actions/users";
import TrackingForm from "@/components/Frontend/TrackingForm";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default async function VerifyTrackingNumber() {
    //Get a User
    return (
        <div className="min-h-screen flex items-center justify-center">
            <Card>
                <CardHeader>
                    <CardTitle className="text-xl">Verify Account</CardTitle>
                    <CardDescription>
                        Please enter the 10 Character Trucking number that was sent to your email.
                    </CardDescription>
                    <CardContent>
                        <TrackingForm />
                    </CardContent>
                </CardHeader>
            </Card>
        </div>
    );
}