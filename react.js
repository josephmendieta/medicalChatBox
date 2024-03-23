/**
 * v0 by Vercel.
 * @see https://v0.dev/t/XID5UfSJ2u5
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <div className="w-full max-w-3xl rounded-lg border">
      <div className="grid border-t">
        <div className="p-4 border-r">
          <div className="flex items-center gap-2">
            <img
              alt="User"
              className="rounded-full"
              height="40"
              src="/placeholder.svg"
              style={{
                aspectRatio: "40/40",
                objectFit: "cover",
              }}
              width="40"
            />
            <div className="grid text-sm gap-0.5">
              <div className="flex items-center gap-1.5">
                <span className="font-semibold">You</span>
                <span className="text-sm text-[#8d8d92] dark:text-[#71717a]">2:26 PM</span>
              </div>
              <div className="rounded-xl p-2 bg-[#f5f5f6] dark:bg-gray-900">Hi there! How can I assist you today?</div>
            </div>
          </div>
        </div>
        <div className="p-4 border-r">
          <div className="flex items-center gap-2">
            <img
              alt="ChatGPT"
              className="rounded-full"
              height="40"
              src="/placeholder.svg"
              style={{
                aspectRatio: "40/40",
                objectFit: "cover",
              }}
              width="40"
            />
            <div className="grid text-sm gap-0.5">
              <div className="flex items-center gap-1.5">
                <span className="font-semibold">ChatGPT</span>
                <span className="text-sm text-[#8d8d92] dark:text-[#71717a]">2:27 PM</span>
              </div>
              <div className="rounded-xl p-2 bg-[#4d8ef5] text-white">
                I'm here to help! What would you like to know?
              </div>
            </div>
          </div>
        </div>
        <div className="p-4 border-r">
          <div className="flex items-center gap-2">
            <img
              alt="ChatGPT"
              className="rounded-full"
              height="40"
              src="/placeholder.svg"
              style={{
                aspectRatio: "40/40",
                objectFit: "cover",
              }}
              width="40"
            />
            <div className="grid text-sm gap-0.5">
              <div className="flex items-center gap-1.5">
                <span className="font-semibold">ChatGPT</span>
                <span className="text-sm text-[#8d8d92] dark:text-[#71717a]">2:27 PM</span>
              </div>
              <div className="rounded-xl p-2 bg-[#4d8ef5] text-white">
                I'm here to help! What would you like to know?
              </div>
            </div>
          </div>
        </div>
        <div className="p-4 border-r">
          <div className="flex items-center gap-2">
            <img
              alt="ChatGPT"
              className="rounded-full"
              height="40"
              src="/placeholder.svg"
              style={{
                aspectRatio: "40/40",
                objectFit: "cover",
              }}
              width="40"
            />
            <div className="grid text-sm gap-0.5">
              <div className="flex items-center gap-1.5">
                <span className="font-semibold">ChatGPT</span>
                <span className="text-sm text-[#8d8d92] dark:text-[#71717a]">2:27 PM</span>
              </div>
              <div className="rounded-xl p-2 bg-[#4d8ef5] text-white">
                I'm here to help! What would you like to know?
              </div>
            </div>
          </div>
        </div>
        <div className="p-4">
          <div className="flex items-center gap-2">
            <img
              alt="ChatGPT"
              className="rounded-full"
              height="40"
              src="/placeholder.svg"
              style={{
                aspectRatio: "40/40",
                objectFit: "cover",
              }}
              width="40"
            />
            <div className="grid text-sm gap-0.5">
              <div className="flex items-center gap-1.5">
                <span className="font-semibold">ChatGPT</span>
                <span className="text-sm text-[#8d8d92] dark:text-[#71717a]">2:27 PM</span>
              </div>
              <div className="rounded-xl p-2 bg-[#4d8ef5] text-white">
                I'm here to help! What would you like to know?
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t">
        <div className="flex items-center p-4">
          <div />
          <div className="flex-1 ml-4">
            <form>
              <div className="aspect-h-1 aspect-hidden rounded-xl border">
                <Textarea
                  className="w-full min-h-[100px] border-0 p-0 rounded-none resize-none"
                  placeholder="Type a message."
                />
              </div>
              <Button className="mt-4" type="submit">
                Send
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

