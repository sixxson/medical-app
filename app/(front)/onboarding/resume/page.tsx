import { getUserById } from "@/actions/users";
import TrackingForm from "@/components/Frontend/TrackingForm";
import VerifyTokenForm from "@/components/Frontend/VerifyTokenForm";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default async function VerifyAccount({
    params: { id },
}: {
    params: { id: string };
}) {
    //Get a User
    const user = await getUserById(id);
    const userToken = user?.token;
    const role = user?.role;
    return (
        <div className="min-h-screen flex items-center justify-center">
            <Card>
                <CardHeader>
                    <CardTitle className="text-xl">Verify Account</CardTitle>
                    <CardDescription>
                        Please enter the 10 Character Trucking number that was sent to your email.
                    </CardDescription>
                    <CardContent>
                        <TrackingForm role={role} userToken={userToken} id={id} />
                    </CardContent>
                </CardHeader>
            </Card>
        </div>
    );
}