"use client";

import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/library/components/accordion";
import { Alert, AlertDescription, AlertTitle } from "@/library/components/alert";
import { AspectRatio } from "@/library/components/aspect-ratio";
import { Avatar, AvatarFallback } from "@/library/components/avatar";
import { Badge } from "@/library/components/badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/library/components/breadcrumb";
import { Button, buttonVariants } from "@/library/components/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/library/components/card";
import { Checkbox } from "@/library/components/checkbox";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/library/components/collapsible";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/library/components/dialog";
import { Drawer, DrawerHeader, DrawerTitle } from "@/library/components/drawer";
import { Empty } from "@/library/components/empty";
import { Field, FieldError, FieldHint } from "@/library/components/field";
import { InputGroup, InputGroupAddon, ScrollArea } from "@/library/components/groups";
import { Input } from "@/library/components/input";
import { InputOTP } from "@/library/components/input-otp";
import { Kbd } from "@/library/components/kbd";
import { Label } from "@/library/components/label";
import {
  DropdownMenu,
  HoverCard,
  Popover,
  Tooltip,
} from "@/library/components/overlays";
import { Pagination, PaginationItem } from "@/library/components/pagination";
import { Progress } from "@/library/components/progress";
import { Radio, RadioGroup } from "@/library/components/radio-group";
import { Select } from "@/library/components/select";
import { Separator } from "@/library/components/separator";
import { Skeleton } from "@/library/components/skeleton";
import { Slider } from "@/library/components/slider";
import { Spinner } from "@/library/components/spinner";
import { Switch } from "@/library/components/switch";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/library/components/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/library/components/tabs";
import { Textarea } from "@/library/components/textarea";
import { useToast } from "@/library/components/toast";
import { Toggle } from "@/library/components/toggle";
import { ToggleGroup, ToggleGroupItem } from "@/library/components/toggle-group";
import type { ReactNode } from "react";

export const examples: Record<string, string> = {
  button: `import { Button } from "@/library"

<Button>Expose</Button>
<Button variant="outline">Hold</Button>
<Button variant="lamp">Safelight</Button>`,
  toggle: `<Toggle pressed={bold} onPressedChange={setBold}>Bold</Toggle>`,
  "toggle-group": `<ToggleGroup value={align} onValueChange={setAlign}>
  <ToggleGroupItem value="left">Left</ToggleGroupItem>
  <ToggleGroupItem value="center">Center</ToggleGroupItem>
</ToggleGroup>`,
  input: `<Input placeholder="Search the catalog…" />`,
  textarea: `<Textarea placeholder="Describe the print…" />`,
  checkbox: `<label className="flex items-center gap-2">
  <Checkbox />
  <span>Push two stops</span>
</label>`,
  "radio-group": `<RadioGroup name="paper">
  <label className="flex items-center gap-2"><Radio value="fiber" /> Fiber</label>
  <label className="flex items-center gap-2"><Radio value="rc" /> RC</label>
</RadioGroup>`,
  switch: `<Switch checked={on} onCheckedChange={setOn} />`,
  slider: `<Slider min={1} max={16} defaultValue={5.6} />`,
  select: `<Select options={[{ value: "tri-x", label: "Tri-X 400" }]} />`,
  label: `<Label htmlFor="iso">ISO</Label>`,
  field: `<Field>
  <Label htmlFor="email">Email</Label>
  <Input id="email" />
  <FieldHint>We'll never share the contact sheet.</FieldHint>
</Field>`,
  "input-group": `<InputGroup>
  <InputGroupAddon>https://</InputGroupAddon>
  <Input />
</InputGroup>`,
  "input-otp": `<InputOTP value={code} onChange={setCode} />`,
  badge: `<Badge variant="lamp">Developing</Badge>`,
  avatar: `<Avatar><AvatarFallback>AG</AvatarFallback></Avatar>`,
  card: `<Card>
  <CardHeader>
    <CardTitle>Contact sheet</CardTitle>
    <CardDescription>Frame 12 of 36</CardDescription>
  </CardHeader>
</Card>`,
  table: `<Table>
  <TableHeader>
    <TableRow>
      <TableHead>Stock</TableHead>
      <TableHead>ISO</TableHead>
    </TableRow>
  </TableHeader>
</Table>`,
  kbd: `Press <Kbd>⌘</Kbd> <Kbd>K</Kbd>`,
  separator: `<Separator />`,
  "aspect-ratio": `<AspectRatio ratio={16 / 9} />`,
  "scroll-area": `<ScrollArea className="h-40">…</ScrollArea>`,
  accordion: `<Accordion defaultValue={["a"]}>
  <AccordionItem value="a">
    <AccordionTrigger>Grain</AccordionTrigger>
    <AccordionContent>Texture is a feature.</AccordionContent>
  </AccordionItem>
</Accordion>`,
  tabs: `<Tabs defaultValue="paper">
  <TabsList>
    <TabsTrigger value="paper">Paper</TabsTrigger>
    <TabsTrigger value="film">Film</TabsTrigger>
  </TabsList>
</Tabs>`,
  collapsible: `<Collapsible>
  <CollapsibleTrigger>Notes</CollapsibleTrigger>
  <CollapsibleContent>Hold for shadows.</CollapsibleContent>
</Collapsible>`,
  breadcrumb: `<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>Studio</BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem><BreadcrumbPage>Prints</BreadcrumbPage></BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>`,
  pagination: `<Pagination>
  <PaginationItem>1</PaginationItem>
  <PaginationItem current>2</PaginationItem>
</Pagination>`,
  alert: `<Alert tone="lamp">
  <AlertTitle>Safelight on</AlertTitle>
  <AlertDescription>Paper is still sensitive.</AlertDescription>
</Alert>`,
  progress: `<Progress value={62} />`,
  spinner: `<Spinner />`,
  skeleton: `<Skeleton className="h-10 w-40" />`,
  toast: `const { toast } = useToast()
toast({ title: "Print washed", description: "Hang to dry." })`,
  empty: `<Empty title="No frames" description="Load a roll to begin." />`,
  dialog: `<Dialog>
  <DialogTrigger>Open</DialogTrigger>
  <DialogContent>…</DialogContent>
</Dialog>`,
  drawer: `<Drawer open={open} onOpenChange={setOpen}>…</Drawer>`,
  tooltip: `<Tooltip content="Push process"><Button>ISO</Button></Tooltip>`,
  popover: `<Popover trigger={<Button>Meta</Button>}>Shot notes</Popover>`,
  "hover-card": `<HoverCard trigger={<Button variant="ghost">Author</Button>}>…</HoverCard>`,
  "dropdown-menu": `<DropdownMenu trigger={<Button>Actions</Button>} items={[…]} />`,
};

function Row({ children }: { children: ReactNode }) {
  return <div className="flex flex-wrap items-center gap-3">{children}</div>;
}

export const demos: Record<string, () => ReactNode> = {
  button: () => (
    <Row>
      <Button>Expose</Button>
      <Button variant="outline">Hold</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="lamp">Safelight</Button>
      <Button variant="lens">Lens</Button>
      <Button variant="stop">Stop</Button>
    </Row>
  ),
  toggle: function ToggleDemo() {
    const [on, setOn] = useState(true);
    return (
      <Toggle pressed={on} onPressedChange={setOn}>
        Grain
      </Toggle>
    );
  },
  "toggle-group": function ToggleGroupDemo() {
    const [value, setValue] = useState(["center"]);
    return (
      <ToggleGroup value={value} onValueChange={setValue}>
        <ToggleGroupItem value="left">Left</ToggleGroupItem>
        <ToggleGroupItem value="center">Center</ToggleGroupItem>
        <ToggleGroupItem value="right">Right</ToggleGroupItem>
      </ToggleGroup>
    );
  },
  input: () => <Input className="max-w-sm" placeholder="Search the catalog…" />,
  textarea: () => <Textarea className="max-w-md" placeholder="Describe the print…" />,
  checkbox: () => (
    <label className="flex items-center gap-2 text-sm">
      <Checkbox defaultChecked />
      Push two stops
    </label>
  ),
  "radio-group": function RadioDemo() {
    const [value, setValue] = useState("fiber");
    return (
      <RadioGroup name="paper" value={value} onValueChange={setValue}>
        <label className="flex items-center gap-2 text-sm">
          <Radio value="fiber" /> Fiber
        </label>
        <label className="flex items-center gap-2 text-sm">
          <Radio value="rc" /> RC
        </label>
      </RadioGroup>
    );
  },
  switch: function SwitchDemo() {
    const [on, setOn] = useState(true);
    return (
      <label className="flex items-center gap-3 text-sm">
        <Switch checked={on} onCheckedChange={setOn} />
        Safelight {on ? "on" : "off"}
      </label>
    );
  },
  slider: () => <Slider className="max-w-sm" defaultValue={56} />,
  select: function SelectDemo() {
    const [value, setValue] = useState("trix");
    return (
      <Select
        className="max-w-xs"
        value={value}
        onValueChange={setValue}
        options={[
          { value: "trix", label: "Kodak Tri-X 400" },
          { value: "hp5", label: "Ilford HP5" },
          { value: "portra", label: "Portra 400" },
        ]}
      />
    );
  },
  label: () => (
    <div className="flex max-w-xs flex-col gap-2">
      <Label htmlFor="iso">ISO</Label>
      <Input id="iso" defaultValue="400" />
    </div>
  ),
  field: () => (
    <Field className="max-w-sm">
      <Label htmlFor="email">Contact</Label>
      <Input id="email" placeholder="studio@obscura.dev" />
      <FieldHint>We never share the contact sheet.</FieldHint>
      <FieldError>Required if you want a proof.</FieldError>
    </Field>
  ),
  "input-group": () => (
    <InputGroup className="max-w-sm">
      <InputGroupAddon>https://</InputGroupAddon>
      <Input placeholder="obscura.dev" />
    </InputGroup>
  ),
  "input-otp": function OtpDemo() {
    const [value, setValue] = useState("482");
    return <InputOTP value={value} onChange={setValue} />;
  },
  badge: () => (
    <Row>
      <Badge>Plate</Badge>
      <Badge variant="lamp">Developing</Badge>
      <Badge variant="lens">Lens coat</Badge>
      <Badge variant="stop">Stop bath</Badge>
      <Badge variant="fix">Fixed</Badge>
    </Row>
  ),
  avatar: () => (
    <Row>
      <Avatar>
        <AvatarFallback>AG</AvatarFallback>
      </Avatar>
      <Avatar className="size-14">
        <AvatarFallback>OB</AvatarFallback>
      </Avatar>
    </Row>
  ),
  card: () => (
    <Card className="max-w-sm">
      <CardHeader>
        <CardTitle>Contact sheet</CardTitle>
        <CardDescription>Frame 12 of 36 — afternoon window light.</CardDescription>
      </CardHeader>
      <CardContent className="text-sm text-ink-soft">
        Hold the highlights. The grain is the point.
      </CardContent>
      <CardFooter>
        <Button size="sm">Print</Button>
        <Button size="sm" variant="ghost">
          Hold
        </Button>
      </CardFooter>
    </Card>
  ),
  table: () => (
    <Table>
      <TableCaption>Studio inventory, spring roll.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Stock</TableHead>
          <TableHead>ISO</TableHead>
          <TableHead>Format</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>Tri-X</TableCell>
          <TableCell>400</TableCell>
          <TableCell>35mm</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>HP5</TableCell>
          <TableCell>400</TableCell>
          <TableCell>120</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Portra</TableCell>
          <TableCell>400</TableCell>
          <TableCell>35mm</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
  kbd: () => (
    <p className="text-sm">
      Open the command plate with <Kbd>⌘</Kbd> <Kbd>K</Kbd>
    </p>
  ),
  separator: () => (
    <div className="w-full max-w-sm space-y-3">
      <p className="text-sm">Above the rule</p>
      <Separator />
      <p className="text-sm">Below the rule</p>
    </div>
  ),
  "aspect-ratio": () => (
    <AspectRatio ratio={16 / 9} className="max-w-md overflow-hidden border border-ink bg-paper-3">
      <div className="flex size-full items-center justify-center font-display text-2xl">16:9 gate</div>
    </AspectRatio>
  ),
  "scroll-area": () => (
    <ScrollArea className="h-40 max-w-sm p-4 text-sm">
      {Array.from({ length: 12 }, (_, index) => (
        <p key={index} className="mb-2">
          Frame {String(index + 1).padStart(2, "0")} — window light, slight push.
        </p>
      ))}
    </ScrollArea>
  ),
  accordion: () => (
    <Accordion className="w-full max-w-md" defaultValue={["grain"]}>
      <AccordionItem value="grain">
        <AccordionTrigger>Grain</AccordionTrigger>
        <AccordionContent>
          Texture belongs in the interface. We print it into the surface instead of
          sanding it off.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="weight">
        <AccordionTrigger>Weight</AccordionTrigger>
        <AccordionContent>
          Offset shadows, hard borders, a press on click. Components should feel set in metal type.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="light">
        <AccordionTrigger>Light</AccordionTrigger>
        <AccordionContent>
          One safelight for focus and signal. Everything else stays paper and ink.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
  tabs: () => (
    <Tabs defaultValue="paper">
      <TabsList>
        <TabsTrigger value="paper">Paper</TabsTrigger>
        <TabsTrigger value="film">Film</TabsTrigger>
        <TabsTrigger value="chem">Chemistry</TabsTrigger>
      </TabsList>
      <TabsContent value="paper" className="text-sm text-ink-soft">
        Fiber-based warmtone. Air dry, don&apos;t rush the curl.
      </TabsContent>
      <TabsContent value="film" className="text-sm text-ink-soft">
        Black and white stocks, pushed only when the shadows ask.
      </TabsContent>
      <TabsContent value="chem" className="text-sm text-ink-soft">
        Developer, stop, fix. In that order. Always.
      </TabsContent>
    </Tabs>
  ),
  collapsible: () => (
    <Collapsible className="w-full max-w-md">
      <CollapsibleTrigger className="font-display text-xl">Process notes</CollapsibleTrigger>
      <CollapsibleContent>
        <p className="pt-2 text-sm text-ink-soft">
          Dilute 1+1, 20°C, agitation on the minute. Pull thirty seconds if the window was harsh.
        </p>
      </CollapsibleContent>
    </Collapsible>
  ),
  breadcrumb: () => (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>Studio</BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>Rolls</BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Frame 18</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  ),
  pagination: () => (
    <Pagination>
      <PaginationItem>1</PaginationItem>
      <PaginationItem current>2</PaginationItem>
      <PaginationItem>3</PaginationItem>
      <PaginationItem>4</PaginationItem>
    </Pagination>
  ),
  alert: () => (
    <div className="flex w-full max-w-lg flex-col gap-3">
      <Alert tone="lamp">
        <AlertTitle>Safelight on</AlertTitle>
        <AlertDescription>Paper is still sensitive. Keep the door closed.</AlertDescription>
      </Alert>
      <Alert tone="stop">
        <AlertTitle>Stop bath</AlertTitle>
        <AlertDescription>Development has ended. Move to fix.</AlertDescription>
      </Alert>
    </div>
  ),
  progress: () => <Progress className="max-w-sm" value={62} />,
  spinner: () => (
    <Row>
      <Spinner size="sm" />
      <Spinner />
      <Spinner size="lg" />
    </Row>
  ),
  skeleton: () => (
    <div className="flex w-full max-w-sm flex-col gap-3">
      <Skeleton className="h-10 w-2/3" />
      <Skeleton className="h-24 w-full" />
      <Skeleton className="h-4 w-1/2" />
    </div>
  ),
  toast: function ToastDemo() {
    const { toast } = useToast();
    return (
      <Button
        onClick={() =>
          toast({
            title: "Print washed",
            description: "Hang to dry. Do not squeegee the fiber.",
            tone: "lamp",
          })
        }
      >
        Wash print
      </Button>
    );
  },
  empty: () => (
    <Empty
      className="w-full"
      title="No frames"
      description="Load a roll and the contact sheet will appear here."
      action={<Button size="sm">Load roll</Button>}
    />
  ),
  dialog: () => (
    <Dialog>
      <DialogTrigger className={buttonVariants()}>Open enlarger</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Burn the sky</DialogTitle>
          <DialogDescription>
            Hold the card over the foreground for four seconds. Feather the edge.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose className={buttonVariants({ variant: "ghost" })}>Cancel</DialogClose>
          <DialogClose className={buttonVariants({ variant: "lamp" })}>Expose</DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
  drawer: function DrawerDemo() {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button variant="outline" onClick={() => setOpen(true)}>
          Open tray
        </Button>
        <Drawer open={open} onOpenChange={setOpen}>
          <DrawerHeader>
            <DrawerTitle>Chemistry tray</DrawerTitle>
          </DrawerHeader>
          <p className="text-sm text-ink-soft">
            Developer at 20°C. Stop is ready. Fix has another eight prints in it.
          </p>
          <Button className="mt-6" onClick={() => setOpen(false)}>
            Close
          </Button>
        </Drawer>
      </>
    );
  },
  tooltip: () => (
    <Tooltip content="Push process one stop">
      <Button variant="outline">ISO 800</Button>
    </Tooltip>
  ),
  popover: () => (
    <Popover trigger={<Button variant="outline">Shot notes</Button>}>
      <p className="text-sm">Window light, 1/125, f/2.8, slight backlight.</p>
    </Popover>
  ),
  "hover-card": () => (
    <HoverCard
      trigger={
        <Button variant="ghost" className="underline decoration-ink/30 underline-offset-4">
          Studio lead
        </Button>
      }
    >
      <div className="flex items-center gap-3">
        <Avatar>
          <AvatarFallback>AG</AvatarFallback>
        </Avatar>
        <div>
          <p className="font-medium">Atelier G.</p>
          <p className="text-xs text-silver">Prints after midnight.</p>
        </div>
      </div>
    </HoverCard>
  ),
  "dropdown-menu": () => (
    <DropdownMenu
      trigger={<Button variant="outline">Actions</Button>}
      items={[
        { label: "Duplicate frame" },
        { label: "Move to proof box" },
        { label: "Delete negative", danger: true },
      ]}
    />
  ),
};
