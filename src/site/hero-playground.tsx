"use client";

import { useState } from "react";
import { Badge } from "@/library/components/badge";
import { Button } from "@/library/components/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/library/components/card";
import { Input } from "@/library/components/input";
import { Switch } from "@/library/components/switch";
import { CropFrame } from "@/site/crop-frame";

export function HeroPlayground() {
  const [lamp, setLamp] = useState(true);

  return (
    <CropFrame label="01 / live plate" className="p-5 sm:p-8">
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-4">
          <div className="flex flex-wrap gap-2">
            <Button>Expose</Button>
            <Button variant="outline">Hold</Button>
            <Button variant="lamp">Safelight</Button>
          </div>
          <Input placeholder="Search the catalog…" />
          <label className="flex items-center justify-between gap-3 text-sm">
            <span>Safelight {lamp ? "on" : "off"}</span>
            <Switch checked={lamp} onCheckedChange={setLamp} />
          </label>
          <div className="flex flex-wrap gap-2">
            <Badge variant="lamp">Developing</Badge>
            <Badge variant="lens">f/2.8</Badge>
            <Badge>ISO 400</Badge>
          </div>
        </div>
        <Card>
          <CardHeader>
            <CardTitle>Contact sheet</CardTitle>
            <CardDescription>Frame 12 — window light, slight push.</CardDescription>
          </CardHeader>
          <CardContent className="text-sm text-ink-soft">
            Offset shadows. Fiber paper. A single amber signal. This is the plate every
            other component is printed from.
          </CardContent>
        </Card>
      </div>
    </CropFrame>
  );
}
