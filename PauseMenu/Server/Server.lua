RegisterServerEvent('pausemenu:quit')
AddEventHandler('pausemenu:quit', function()
    DropPlayer(source, "Used pause menu to quit.")
end)