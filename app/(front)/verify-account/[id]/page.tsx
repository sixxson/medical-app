import { getUserById } from "@/actions/users";
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
                        Please check your email -{user?.email}- and Enter the code we sent there to verify your account.
                    </CardDescription>
                    <CardContent>
                        <VerifyTokenForm role={role} userToken={userToken} id={id} />
                    </CardContent>
                </CardHeader>
            </Card>
        </div>
    );
}