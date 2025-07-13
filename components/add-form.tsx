
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

interface Signup1Props {
    heading?: string;

    signupText?: string;
    googleText?: string;
    loginText?: string;
    loginUrl?: string;
}

const AddForm = ({
    heading,


    signupText = "Create an account",
    loginText = "Already have an account?",
    loginUrl = "#",
}: Signup1Props) => {
    return (
        <section >
            <div className="flex items-center justify-center">
                <div className="border-muted bg-background flex w-full  max-w-sm flex-col items-center gap-y-8 rounded-md border px-6 py-12 shadow-md">
                    <div className="flex w-full flex-col gap-8">
                        <div className="flex flex-col gap-4">
                            <div className="flex flex-col gap-2">
                                <Select  >
                                    <SelectTrigger className=" w-full ">
                                        <SelectValue placeholder="Add transaction type" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            <SelectLabel></SelectLabel>
                                            <SelectItem value="Income">Income</SelectItem>
                                            <SelectItem value="Spend">Spend</SelectItem>
                                            
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="flex flex-col gap-2">
                                <Input type="text" placeholder="title" required />
                            </div>
                            <div className="flex flex-col gap-2">
                                <Input type="number" placeholder="amount" required />
                            </div>
                            <div className="flex flex-col gap-2">
                                <Select  >
                                    <SelectTrigger className=" w-full ">
                                        <SelectValue placeholder="Category" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            <SelectLabel></SelectLabel>
                                            <SelectItem value="food">Food</SelectItem>
                                            <SelectItem value="grocery">Grocery</SelectItem>
                                            <SelectItem value="health">Health</SelectItem>
                                            <SelectItem value="entertainment">Entertainment</SelectItem>
                                            <SelectItem value="income">Income</SelectItem>
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="flex flex-col gap-4">
                                <Button type="submit" className="mt-2 w-full">
                                    Save
                                </Button>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export { AddForm };
