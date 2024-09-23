import { FileText } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const NoPost = () => {
  return (
    <Card className="w-full bg-stone-900/40 mx-auto border-dotted border-2 border-gray-700">
      <CardContent className="flex flex-col items-center justify-center py-12">
        <FileText className="h-16 w-16 text-muted-foreground mb-4" />
        <h2 className="text-2xl font-semibold text-center mb-2">
          No Blog Posts Yet
        </h2>
        <p className="text-muted-foreground text-center">
          It looks like there aren't any blog posts available at the moment.
        </p>
      </CardContent>
    </Card>
  );
};
