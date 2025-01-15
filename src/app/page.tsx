"use client";

import { useState } from "react";
import { Shield, Eye, EyeOff, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { toast } from "sonner";
import { useAuth } from "@/components/providers/auth-provider";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

const VALID_EMAIL = "leila@demetis.com";
const VALID_PASSWORD = "leila";

const loginSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(1, "Password is required"),
  rememberMe: z.boolean().default(false),
});

type LoginForm = z.infer<typeof loginSchema>;

export default function LoginPage() {
  const { login } = useAuth();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const form = useForm<LoginForm>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  });

  async function onSubmit(data: LoginForm) {
    setLoading(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Check credentials
      if (data.email === VALID_EMAIL && data.password === VALID_PASSWORD) {
        login();
        toast.success("Welcome back!");
        router.push("/dashboard");
      } else {
        throw new Error("Invalid credentials");
      }
    } catch {
      toast.error("Invalid email or password");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex min-h-[calc(100vh-3.5rem)] items-center justify-center p-3 bg-gradient-to-b from-background to-muted/50">
      <Card className="w-full max-w-[380px] shadow-lg">
        <CardHeader className="space-y-2 text-center pb-6">
          <div className="flex justify-center">
            <div className="rounded-full bg-primary/10 p-3 ring-1 ring-primary/20">
              <Shield className="h-6 w-6 text-primary" />
            </div>
          </div>
          <div>
            <CardTitle className="text-xl font-bold">
              Welcome to Demetis
            </CardTitle>
            <CardDescription className="text-sm mt-1">
              Enterprise Security Assessment Platform
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent className="px-6">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="space-y-1">
                    <FormLabel className="text-xs font-medium">Email</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter your email"
                        type="email"
                        {...field}
                        className={cn(
                          "h-9 text-sm transition-colors",
                          "focus-visible:ring-1 focus-visible:ring-primary",
                          loading && "bg-muted"
                        )}
                        disabled={loading}
                      />
                    </FormControl>
                    <FormMessage className="text-xs" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem className="space-y-1">
                    <FormLabel className="text-xs font-medium">
                      Password
                    </FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input
                          placeholder="Enter your password"
                          type={showPassword ? "text" : "password"}
                          {...field}
                          className={cn(
                            "h-9 text-sm transition-colors pr-9",
                            "focus-visible:ring-1 focus-visible:ring-primary",
                            loading && "bg-muted"
                          )}
                          disabled={loading}
                        />
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          className="absolute right-0 top-0 h-9 w-9 px-2.5 py-1.5 hover:bg-transparent"
                          onClick={() => setShowPassword(!showPassword)}
                          disabled={loading}
                        >
                          {showPassword ? (
                            <EyeOff className="h-4 w-4 text-muted-foreground" />
                          ) : (
                            <Eye className="h-4 w-4 text-muted-foreground" />
                          )}
                        </Button>
                      </div>
                    </FormControl>
                    <FormMessage className="text-xs" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="rememberMe"
                render={({ field }) => (
                  <FormItem className="flex items-center space-x-2 space-y-0">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                        disabled={loading}
                      />
                    </FormControl>
                    <FormLabel className="text-xs font-normal leading-none">
                      Remember me
                    </FormLabel>
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                className="w-full h-9 text-sm"
                disabled={loading}
              >
                {loading ? (
                  <div className="flex items-center gap-2">
                    <Loader2 className="h-3.5 w-3.5 animate-spin" />
                    Signing in...
                  </div>
                ) : (
                  "Sign in"
                )}
              </Button>
            </form>
          </Form>
          <div className="mt-4 text-center space-y-0.5">
            <p className="text-xs text-muted-foreground">
              Protected by enterprise-grade security
            </p>
            <div className="flex items-center justify-center gap-1">
              <div className="h-1 w-1 rounded-full bg-green-500" />
              <span className="text-[10px] text-muted-foreground">
                System online
              </span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
